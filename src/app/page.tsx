"use client";

import pic from "@/../public/pic.jpg";
import ProflieCard from "@/components/profile-card";
import GraphCard from "@/components/graph-card";
import { blogs, practices, projects } from "@/data";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import Link from "next/link";
import { FileCheck } from "lucide-react";
import ProjectCard from "@/components/project-card";

export default function Home() {
  const latestBlogs = blogs.slice(0, 3);
  const latestPractie = practices.slice(0, 3);
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="p-2 sm:p-4 h-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-2">
          <ProflieCard
            pic={pic}
            name="Jyotirmoy Barman"
            email="Jyotirmoydotdev@gmail.com"
            subtitle="Software Engineer"
            className=""
          />
          <GraphCard className="col-span-2" />
        </div>
        <div className="flex flex-col ">
          <div className="p-1 mt-4">
            <div className="flex flex-row justify-between items-center py-3">
              <div className="text-xl font-bold ">Latest Blogs</div>
              <Link href={"/blogs"} className="text-sm">
                View all
              </Link>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {latestBlogs.map((blog, index) => (
                <BlogCard blog={blog} key={index} />
              ))}
            </div>
          </div>
          <div className="p-1 mt-4">
            <div className="flex flex-row justify-between items-center py-3">
              <div className="text-xl font-bold ">Latest Practice Question</div>
              <Link href={"/practice"} className="text-sm">
                View all
              </Link>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {latestPractie.map((practice, index) => (
                <Link
                  href={"/practice/" + practice.titleSlug + "/" + practice.id}
                  key={index}
                  className="flex flex-col justify-between gap-4 p-4 group/project w-full sm:bg-accent/40 border-b sm:border hover:dark:border-orange-50/20 hover:border-orange-200 hover:bg-accent/50 sm:hover:scale-105 transition-all rounded-none sm:rounded-xl"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="font-semibold">{practice.exid}</span>
                      <FileCheck size={18} className="stroke-blue-400" />
                      <span
                        className={`text-sm font-semibold
                      ${practice.difficulty === "Easy" ? "text-green-500" : practice.difficulty === "Medium" ? "text-yellow-500" : "text-red-500"}
                      `}
                      >
                        {practice.difficulty}
                      </span>
                    </div>
                    <div className="font-black text-lg">{practice.title}</div>
                  </div>
                  <div className=" flex flex-row gap-2">
                    {practice.topicTags.map((tag, index2) => (
                      <div
                        key={index2}
                        className="bg-gray-500/50 text-xs rounded-md px-1.5 py-1"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-1 mt-4">
            <div className="flex flex-row justify-between items-center py-3">
              <div className="text-xl font-bold ">Latest Projects</div>
              <Link href={"/projects"} className="text-sm">
                View all
              </Link>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {latestProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
