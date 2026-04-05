import {
  getCollection,
  type CollectionEntry,
  type DataEntryMap,
} from 'astro:content';
import { getCollectionName, getSectionPath, sections, type Locale, type SectionKey } from './site';

const normalizePostId = (id: string) => {
  const basename = id.split('/').pop() ?? id;
  return basename.replace(/(zh|en)$/, '');
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
    sections.map(async (section) => {
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
