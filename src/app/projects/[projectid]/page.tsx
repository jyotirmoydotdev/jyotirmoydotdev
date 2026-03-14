import ProjectDetailSection from "@/components/project-detail-section";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data";
import React from "react";
import { FaRegCircle } from "react-icons/fa6";
// import { MdOutlineTaskAlt } from "react-icons/md";

export default async function Page({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  // const [expand, setExpand] = React.useState(false);
  const id = (await params).projectid;
  const data = projects.find(
    (project) => project.id.toLowerCase() == id.toLowerCase(),
  );
  return (
    <div className="p-4">{data && <ProjectDetailSection data={data} />}</div>
  );
}
