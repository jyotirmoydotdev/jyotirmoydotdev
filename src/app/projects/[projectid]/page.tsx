import ProjectDetailSection from "@/components/project-detail-section";
import { projects } from "@/data";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const id = (await params).projectid;
  const data = projects.find(
    (project) => project.id.toLowerCase() == id.toLowerCase(),
  );
  return (
    <div className="p-4">{data && <ProjectDetailSection data={data} />}</div>
  );
}
