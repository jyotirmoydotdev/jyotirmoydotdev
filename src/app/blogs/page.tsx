import { blogs } from '@/data'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-5 relative w-full md:w-1/2 '>
            <div className="flex flex-col gap-2">
                {
                    blogs.map((blog, i) => (
                        <Link href={blog.url} key={i} className="gap-1 py-4 flex flex-col group/blog active:pl-2 hover:pl-2 transition-all ">
                            <span className=' font-medium group-hover/blog:text-orange-500 dark:group-hover/blog:text-orange-400'>{blog.title}</span>
                            <span className=' line-clamp-1 text-gray-500 text-sm'>{blog.description}</span>
                            <div className="flex items-center gap-2 text-sm text-black/50 dark:text-gray-500">
                                <span>{blog.readTime}</span>
                                <span className=' size-1 bg-gray-500 rounded-full'></span>
                                <span>{blog.date}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default page