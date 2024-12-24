import { Separator } from '@/components/ui/separator'
import { blogs } from '@/data'
import React from 'react'

const page = () => {
    return (
        <div className='p-5 relative'>
            <div className="flex flex-col gap-2">
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {"  |  "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
                {
                    blogs.map((blog, i) => (
                        <div className="flex flex-col gap-3 py-4 border-b">
                            <span className=' font-semibold'>{blog.title}</span>
                            <span className='text-sm line-clamp-2 sm:w-1/2'>{blog.description}</span>
                            <span>{blog.readTime} {" | "} {blog.date} </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page