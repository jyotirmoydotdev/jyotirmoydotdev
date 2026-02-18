"use client";

import pic from "@/../public/pic.jpg"
import ProflieCard from "@/components/profile-card";
import GraphCard from "@/components/graph-card";
import { blogs } from "@/data";
import { BlogCard } from "@/components/blog-card";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = isMobile ? 1 : 3;
  const handlePageChange = (pageNumber: number) => { setCurrentPage(pageNumber); };
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="p-4 h-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
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
            <div className="flex flex-row justify-between py-3">
              <div className="text-xl font-bold ">Latest Blogs</div>
              <div className="flex flex-row gap-2">
                <button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)} className="rounded-lg border border-gray-300 dark:border-gray-700 p-1 hover:dark:bg-gray-600/50 hover:bg-gray-300/50 transition-colors">
                  <ChevronLeft className=' stroke-gray-400' />
                </button>
                <button disabled={currentPage >= Math.ceil(blogs.length / blogsPerPage)} onClick={() => handlePageChange(currentPage + 1)} className="rounded-lg border border-gray-300 dark:border-gray-700 p-1 hover:dark:bg-gray-600/50 hover:bg-gray-300/50 transition-colors">
                  <ChevronRight className=' stroke-gray-400' />
                </button>
              </div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 relative" >
              {
                currentBlogs.map((blog, index) => (
                  <BlogCard blog={blog} key={index} />
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
