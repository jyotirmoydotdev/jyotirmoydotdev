import ProjectDetailSection from "@/components/project-detail-section";
import { projects } from "@/data";
import { notFound } from "next/navigation";
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
  if (!data) {
    return notFound();
  }
  return (
    <div className="p-4 max-w-4xl mx-auto">
      {data && <ProjectDetailSection data={data} />}
    </div>
  );
}
