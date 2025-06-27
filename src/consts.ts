// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE_TITLE = 'idaibin.dev';
export const SITE_DESCRIPTION =
  '专注于 Rust、React 和现代全栈开发的技术博客，分享 Rustzen Admin 开源项目的构建经验';

export type BlogPost = CollectionEntry<'blog'>;
export type RustzenAdminPost = CollectionEntry<'rustzenAdmin'>;

export const getPosts = async (
  collection: 'blog' | 'rustzenAdmin',
  language: string = 'zh',
  limit: number = 100,
): Promise<(BlogPost | RustzenAdminPost)[]> => {
  const posts = (await getCollection(collection))
    .filter((post) => post.filePath?.endsWith(`.${language}.md`))
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );

  return posts.slice(0, limit);
};

// 获取当前语言
export function getCurrentLanguage(url: URL): string {
  const pathname = url.pathname;
  if (pathname.includes('-en')) {
    return 'en';
  }
  return 'zh';
}

// 语言切换工具函数
export function getLanguageFromSlug(slug: string): 'zh' | 'en' {
  return slug.endsWith('-en') ? 'en' : 'zh';
}

export function getBaseSlug(slug: string): string {
  return slug.replace('-en', '');
}

export function getAlternateUrl(currentPath: string, basePath: string): string {
  const currentLang = getLanguageFromSlug(currentPath);
  const baseSlug = getBaseSlug(currentPath);

  if (currentLang === 'en') {
    // 从英文切换到中文，去掉 -en 后缀
    return `${basePath}/${baseSlug}`;
  } else {
    // 从中文切换到英文，添加 -en 后缀
    return `${basePath}/${baseSlug}-en`;
  }
}

// 从文件路径获取基础名称
export function getPostBaseSlug(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';
  return fileName.replace(/\.(zh|en)\.md$/, '');
}
