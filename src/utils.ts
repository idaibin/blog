import {
  getCollection,
  type CollectionEntry,
  type DataEntryMap,
} from 'astro:content';

export const getPosts = async (
  collection: keyof DataEntryMap,
  limit: number = 100,
): Promise<CollectionEntry<keyof DataEntryMap>[]> => {
  const posts = (await getCollection(collection))
    .map((post) => ({
      ...post,
      id: post.id.replace(/(zh|en)$/, ''),
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
