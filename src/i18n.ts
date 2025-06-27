import { getCollection } from "astro:content";

export type PostType = "blog" | "blogZh" | "rustzenAdmin" | "rustzenAdminZh";

export const getPosts = async (
  collection: PostType,
  limit: number = 100
): Promise<CollectionEntry<PostType>[]> => {
  const posts = (await getCollection(collection))
    .map((post) => ({
      ...post,
      id: post.id.replace(/(zh|en)$/, ""),
    }))
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  posts.forEach((post) => {
    console.log("post.id", post.id);
  });
  return posts.slice(0, limit);
};
