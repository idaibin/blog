import {
  getCollection,
  type CollectionEntry,
  type DataEntryMap,
} from "astro:content";
import {
  getCollectionName,
  getSectionPath,
  homeSections,
  type Locale,
  type SectionKey,
} from "./site";

const normalizePostId = (id: string) => {
  const basename = id.split("/").pop() ?? id;
  return basename.replace(/\.?(zh|en)$/, "");
};

export const getPosts = async (
  collection: keyof DataEntryMap,
  limit: number = Number.MAX_SAFE_INTEGER,
): Promise<CollectionEntry<keyof DataEntryMap>[]> => {
  const posts = (await getCollection(collection))
    .map((post) => ({
      ...post,
      id: normalizePostId(post.id),
    }))
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
  return posts.slice(0, limit);
};

export const getPostCount = async (collection: keyof DataEntryMap) => {
  const posts = await getCollection(collection);
  return posts.length;
};

export const getSectionPosts = async (
  section: SectionKey,
  locale: Locale,
  limit: number = Number.MAX_SAFE_INTEGER,
) => getPosts(getCollectionName(section, locale) as keyof DataEntryMap, limit);

export const getSectionCount = async (section: SectionKey, locale: Locale) =>
  getPostCount(getCollectionName(section, locale) as keyof DataEntryMap);

export const getFeedPath = (
  section: SectionKey,
  slug: string,
  locale: Locale,
) => `${getSectionPath(section, locale)}/${slug}`;

export const chunkItems = <T>(items: T[], size: number) => {
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
};

export const getAllSectionPosts = async (
  locale: Locale,
  limitPerSection: number = Number.MAX_SAFE_INTEGER,
) => {
  const entries = await Promise.all(
    homeSections.map(async (section) => {
      const posts = await getSectionPosts(section, locale, limitPerSection);
      return posts.map((post) => ({
        ...post,
        section,
      }));
    }),
  );

  return entries
    .flat()
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
};

// 内容分析指标
export interface ContentMetrics {
  wordCount: number;
  readingTimeMinutes: number;
  sentenceCount: number;
  paragraphCount: number;
}

/**
 * 计算文本的字数（中英文混合）
 * 中文按单字计数，英文按单词计数
 */
export const countWords = (text: string): number => {
  // 移除 HTML 标签和特殊字符
  const cleaned = text.replace(/<[^>]*>/g, "").trim();

  // 中文字符计数
  const chineseMatch = cleaned.match(/[\u4e00-\u9fa5]/g);
  const chineseCount = chineseMatch ? chineseMatch.length : 0;

  // 英文单词计数（非中文字符部分）
  const englishText = cleaned.replace(/[\u4e00-\u9fa5]/g, " ");
  const englishWords = englishText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return chineseCount + englishWords;
};

/**
 * 计算阅读时间（分钟）
 * 中文按 250 字/分钟，英文按 200 词/分钟
 */
export const calculateReadingTime = (text: string): number => {
  const cleaned = text.replace(/<[^>]*>/g, "").trim();

  // 中文字符
  const chineseMatch = cleaned.match(/[\u4e00-\u9fa5]/g);
  const chineseCount = chineseMatch ? chineseMatch.length : 0;
  const chineseReadTime = Math.ceil(chineseCount / 250);

  // 英文单词
  const englishText = cleaned.replace(/[\u4e00-\u9fa5]/g, " ");
  const englishWords = englishText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  const englishReadTime = Math.ceil(englishWords / 200);

  return Math.max(1, chineseReadTime + englishReadTime);
};

/**
 * 计算句子数量
 */
export const countSentences = (text: string): number => {
  const cleaned = text.replace(/<[^>]*>/g, "").trim();
  // 匹配中文句式和英文句式
  const matches = cleaned.match(/[。！？\?\!]/g) || [];
  return Math.max(1, matches.length);
};

/**
 * 计算段落数量
 */
export const countParagraphs = (text: string): number => {
  const cleaned = text.replace(/<[^>]*>/g, "").trim();
  const paragraphs = cleaned.split(/\n\n+/).filter((p) => p.length > 0);
  return Math.max(1, paragraphs.length);
};

/**
 * 获取完整的内容分析指标
 */
export const getContentMetrics = (text: string): ContentMetrics => {
  return {
    wordCount: countWords(text),
    readingTimeMinutes: calculateReadingTime(text),
    sentenceCount: countSentences(text),
    paragraphCount: countParagraphs(text),
  };
};
