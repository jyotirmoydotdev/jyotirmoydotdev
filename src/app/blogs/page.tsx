import { blogs } from '@/data'
import React from 'react'

const page = () => {
    return (
        <div className='p-5 relative '>
            <div className="flex flex-col gap-2">
                {
                    blogs.map((blog, i) => (
                        <div key={i} className="flex flex-row gap-3 py-4 items-center">
                            <span className=' font-medium'>{blog.title}</span>
                            <span className=' size-1 bg-gray-500 rounded-full'></span>
                            <span className=' text-black/50 dark:text-white/50 flex gap-2 items-center'>
                                {blog.readTime} 
                                <span className=' size-1 bg-gray-500 rounded-full'></span>
                                {blog.date}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page