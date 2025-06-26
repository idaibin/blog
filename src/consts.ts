// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE_TITLE = 'idaibin.dev';
export const SITE_DESCRIPTION =
  '专注于 Rust、React 和现代全栈开发的技术博客，分享 Rustzen Admin 开源项目的构建经验';

export type BlogPost = CollectionEntry<'blog'>;
export type RustzenAdminPost = CollectionEntry<'rustzenAdmin'>;

const currentLanguage = 'zh';
export const getPosts = async (
  collection: 'blog' | 'rustzenAdmin',
  limit: number = 10,
): Promise<(BlogPost | RustzenAdminPost)[]> => {
  const posts = (await getCollection(collection))
    .filter((post) => post.filePath?.endsWith(`${currentLanguage}.md`))
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );

  // 按发布日期排序
  return posts
    .filter((post) => post.filePath?.endsWith(`${currentLanguage}.md`))
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    )
    .slice(0, limit);
};
