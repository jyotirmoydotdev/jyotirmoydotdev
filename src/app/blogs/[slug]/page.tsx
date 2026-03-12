import { parseMdxContent } from "@/components/autocontent";
import Content from "@/components/content";
import { blogs } from "@/data";
import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Blog } = await import(`@/markdown/${slug}.mdx`);
  const mdxPath = path.join(process.cwd(), `src/markdown/${slug}.mdx`);
  const mdxSource = await readFile(mdxPath, "utf-8");
  const content = parseMdxContent(mdxSource);
  const blogindex = blogs.findIndex((blog) => blog.titleSlug === slug);
  const blogdata = [
    ...blogs.slice((blogindex + 1) % blogs.length),
    ...blogs.slice(0, (blogindex + 1) % blogs.length),
  ]
    .slice(0, 3)
    .map(({ title, description, date, titleSlug }) => ({
      title: title,
      subTitle: description,
      footer: date,
      url: titleSlug,
    }));
  return (
    <div className="relative">
      <div className="p-4 gap-4 flex flex-row justify-center pl-4 sm:pl-8">
        <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert ">
          <Blog />
        </div>
        <Content moretitle="More Blogs" mores={blogdata} content={content} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogs.flatMap((blog) => {
    return { slug: blog.titleSlug };
  });
}

export const dynamicParams = false;

