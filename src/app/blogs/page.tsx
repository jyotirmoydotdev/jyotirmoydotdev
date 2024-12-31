import { blogs } from '@/data'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-4'>
            <div className="flex flex-col gap-2 w-full md:w-2/3">
                {
                    blogs.map((blog, i) => (
                        <Link href={blog.url} key={i} className="gap-1 py-2 sm:py-4 flex flex-col group/blog active:pl-2 hover:pl-2 transition-all border-b sm:border-none ">
                            <span className=' font-medium group-hover/blog:text-orange-500 dark:group-hover/blog:text-orange-400'>{blog.title}</span>
                            <span className=' line-clamp-2 text-gray-500 text-sm'>{blog.description}</span>
                            <div className="  text-sm text-black/50 dark:text-gray-500">
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