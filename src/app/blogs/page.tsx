'use client'

import { blogs } from '@/data'
import Link from 'next/link'
import React from 'react'
import { Calendar } from 'lucide-react'
import { SidebarOptInForm } from '@/components/sidebar-opt-in-form'

const page = () => {
    return (
        <div className="sm:p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            <SidebarOptInForm/>
                {
                    blogs.map((blog, i) => (
                        <Link
                            key={i}
                            href={blog.url}
                            className="flex flex-col justify-between gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 sm:hover:scale-105 transition-all sm:rounded-xl"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div className="flex gap-2 items-center">
                                        <Calendar className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors size-4' />
                                        <div className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 text-xs text-black/60 dark:text-white/60">{blog.date}</div>
                                    </div>
                                </div>
                                <div className=" line-clamp-2 font-black text-base sm:text-lg font-sans dark:group-hover/project:text-orange-400 group-hover/project:text-orange-500 transition-colors">
                                    {blog.title}
                                </div>
                                <div className="text-xs line-clamp-3 sm:text-sm dark:text-white/80 text-black/80 group-hover/project:text-orange-900 dark:group-hover/project:text-orange-100 transition-colors">
                                    {blog.description}
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap text-xs text-orange-500 ">
                                Read More
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default page