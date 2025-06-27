import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  const currentLocale = context.currentLocale || "en";
  const isZh = currentLocale === "zh";

  const siteTitle = "idaibin.dev";
  const siteDescription = isZh
    ? "专注于 Rust、React 和现代全栈开发的技术博客，分享 Rustzen Admin 开源项目的构建经验"
    : "Tech blog focused on Rust, React and modern full-stack development, sharing Rustzen Admin open source project construction experience";

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
