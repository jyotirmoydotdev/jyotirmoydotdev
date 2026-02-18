'use client'

import { blogs } from '@/data'
import React from 'react'
import { ChevronLeft, ChevronRight, File } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FaTerminal, FaEthereum, FaCode } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { BlogCard } from '@/components/blog-card'

const Page = () => {
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 9;
  const filterBlogs = () => {
    return blogs.filter(blog => {
      const matchesSearch = search.trim() === "" || blog.title.toLowerCase().includes(search.toLowerCase()) || blog.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "" || blog.category === category;
      return matchesSearch && matchesCategory;
    });
  };
  const filterBlog = filterBlogs()
  const handlePageChange = (pageNumber: number) => { setCurrentPage(pageNumber); };
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filterBlog.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <div className="sm:p-4 relative max-w-7xl mx-auto">
      <div className="flex flex-row justify-between items-center px-2 py-2 mb-4">
        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <Input value={search} onChange={(e) => setSearch(e.target.value)} className='h-8 w-full sm:w-4/5 lg:w-[250px] bg-[#fafafa] dark:bg-[#18181b] border-orange-500' placeholder='Search blogs...' />
          <div className="grid">
            <div className="flex gap-2 sm:gap-4 overflow-x-scroll no-scrollbar font-semibold text-muted-foreground text-xs ">
              <button onClick={() => setCategory("")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "" && " border-orange-500")}>
                <File className={cn("size-4 ")} />
                <span>All</span>
              </button>
              <button onClick={() => setCategory("backend")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "backend" && "border-orange-500")}>
                <FaTerminal className={cn("size-4 fill-green-500")} />
                <span>Backend</span>
              </button>
              <button onClick={() => setCategory("blockchain")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "blockchain" && "border-orange-500")}>
                <FaEthereum className={cn("size-4")} />
                <span>Blockchain</span>
              </button>
              <button onClick={() => setCategory("ai-machine-learning")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "ai-machine-learning" && "border-orange-500")}>
                <RiGeminiFill className={cn("size-4 fill-orange-500")} />
                <span>AI & Machine Learning</span>
              </button>
              <button onClick={() => setCategory("frontend")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "frontend" && "border-orange-500")}>
                <FaCode className={cn("size-4 fill-sky-500")} />
                <span>Frontend</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {/* <SidebarOptInForm /> */}
        {
          currentBlogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
      <div className="flex justify-end gap-2 items-center py-4">
        <div className="px-1 text-gray-500 text-sm font-semibold">{currentPage} / {Math.ceil(filterBlog.length / blogsPerPage)}</div>
        <button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)} className=" rounded-lg border border-gray-300 dark:border-gray-700 p-1 hover:dark:bg-gray-600/50 hover:bg-gray-300/50 transition-colors"> <ChevronLeft className=' stroke-gray-400' /></button>
        <button disabled={currentPage >= Math.ceil(filterBlog.length / blogsPerPage)} onClick={() => handlePageChange(currentPage + 1)} className=" rounded-lg border border-gray-300 dark:border-gray-700 p-1 hover:dark:bg-gray-600/50 hover:bg-gray-300/50 transition-colors"> <ChevronRight className=' stroke-gray-400' /> </button>
      </div>

    </div>
  )
}

export default Page
