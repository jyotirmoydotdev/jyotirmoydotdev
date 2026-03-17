import { parseMdxContent } from "@/components/autocontent";
import Content from "@/components/content";
import { projects } from "@/data";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ taskid: string; projectid: string }>;
}) {
  const tid = (await params).taskid;
  const pid = (await params).projectid;

  let TaskMarkdown;
  let mdxSource;

  try {
    const mod = await import(`@/markdown/${tid}.mdx`);
    TaskMarkdown = mod.default;

    const mdxPath = path.join(process.cwd(), `src/markdown/${tid}.mdx`);
    mdxSource = await readFile(mdxPath, "utf-8");
  } catch (err) {
    console.log(err);
    notFound();
  }

  const content = parseMdxContent(mdxSource);

  const tasks = projects.find((p) => p.id == pid)?.tasks || [];
  const taskindex = tasks.findIndex((t) => t.id === tid);
  if (taskindex === -1) notFound();
  const moredata = [
    ...tasks?.slice((taskindex + 1) % tasks.length),
    ...tasks?.slice(0, (taskindex + 1) % tasks.length),
  ]
    .slice(0, 3)
    .map(({ id, title }, i) => ({
      title: "Task " + i,
      subTitle: title,
      footer: null,
      url: "/projects/" + pid + "/tasks/" + id,
    }));

  return (
    <div className="relative">
      <div className="p-4 gap-4 flex flex-row justify-center pl-4">
        <div className="w-[92vw] md:max-w-[578.4px] prose dark:prose-invert">
          <TaskMarkdown />
        </div>
        <Content moretitle="Next Tasks" mores={moredata} content={content} />
      </div>
    </div>
  );
}
