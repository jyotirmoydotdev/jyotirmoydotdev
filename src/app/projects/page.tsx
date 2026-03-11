"use client";

import ProjectCard from "@/components/project-card";
import { projects } from "@/data";
import React from "react";

const Page = () => {
  return (
    <div className="sm:p-4 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 cursor-pointer">
        {projects.map((value, index) => (
          <ProjectCard key={index} project={value} />
        ))}
      </div>
    </div>
  );
};

export default Page;
