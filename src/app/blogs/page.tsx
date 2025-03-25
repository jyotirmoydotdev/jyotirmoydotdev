'use client'

import { blogs } from '@/data'
import React from 'react'
import { File } from 'lucide-react'
import { SidebarOptInForm } from '@/components/sidebar-opt-in-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { FaTerminal, FaEthereum, FaCode } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { BlogCard } from '@/components/blog-card'

const Page = () => {
    const [search, setSearch] = React.useState("")
    const [category, setCategory] = React.useState("")
    const filterBlogs = () => {
        return blogs.filter(blog => {
            const matchesSearch = search.trim() === "" || blog.title.toLowerCase().includes(search.toLowerCase()) || blog.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === "" || blog.category === category;
            return matchesSearch && matchesCategory;
        });
    };
    const filterBlog = filterBlogs()
    return (
        <div className="sm:p-4 relative max-w-7xl mx-auto">
            <div className=" bg-sidebar p-3 sm:p-6 mb-0 sm:mb-4 flex justify-between items-center border-sidebar-border border">
                <div className="flex flex-col">
                    <div className=" text-base sm:text-2xl font-semibold mb-2">
                        Blogs
                    </div>
                    <div className="max-w-[553px] mb-2 text-muted-foreground text-xs sm:text-base">
                        Discover insightful blogs covering backend development, Golang expertise, system design strategies, and more, delivering practical tips, industry trends, and expert perspectives to fuel your growth.
                    </div>
                </div>
                <div className="p-2 hidden sm:block">
                    <File className="size-[3rem] stroke-orange-500" />
                </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-4 items-center px-2 py-2">
                <Input value={search} onChange={(e)=>setSearch(e.target.value)} className='h-8 w-full sm:w-4/5 lg:w-[250px] bg-[#fafafa] dark:bg-[#18181b] border-orange-500' placeholder='Search blogs...' />
                <div className="grid">
                    <div className="flex gap-2 sm:gap-4 overflow-x-scroll no-scrollbar font-semibold text-muted-foreground text-xs ">
                        <button onClick={()=>setCategory("")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "" && " border-orange-500")}>
                            <File className={cn("size-4 ")} />
                            <span>All</span>
                        </button>
                        <button onClick={()=>setCategory("backend")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "backend" && "border-orange-500")}>
                            <FaTerminal className={cn("size-4 fill-green-500")} />
                            <span>Backend</span>
                        </button>
                        <button onClick={()=>setCategory("blockchain")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "blockchain" && "border-orange-500")}>
                            <FaEthereum className={cn("size-4")} />
                            <span>Blockchain</span>
                        </button>
                        <button onClick={()=>setCategory("ai-machine-learning")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "ai-machine-learning" && "border-orange-500")}>
                            <RiGeminiFill className={cn("size-4 fill-orange-500")} />
                            <span>AI & Machine Learning</span>
                        </button>
                        <button onClick={()=>setCategory("frontend")} className={cn("flex py-2 px-4 bg-sidebar rounded-lg items-center border border-sidebar-border space-x-2 text-nowrap", category === "frontend" && "border-orange-500")}>
                            <FaCode className={cn("size-4 fill-sky-500")} />
                            <span>Frontend</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                <SidebarOptInForm />
                {
                    filterBlog.map((blog, i) => (
                        <BlogCard blog={blog} key={i}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Page