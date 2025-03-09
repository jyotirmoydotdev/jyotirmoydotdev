import { blogCategories } from '@/data';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export type blogsType = {
    title: string,
    description: string,
    titleSlug: string,
    date: string,
    category: string,
    content: (string | string[])[],
};

type BlogCardProps = {
    blog: blogsType;
};

export function BlogCard({ blog }: BlogCardProps, key:number) {
    // Find the category that matches the blog category value
    const category = blogCategories.find((c) => c.value === blog.category);

    if (!category) {
        return null;
    }

    const Icon = category.icon;

    return (
        <Link
            key={key}
            href={`/blogs/${blog.titleSlug}`}
            className="flex flex-col justify-between gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 sm:hover:scale-105 transition-all sm:rounded-xl"
        >
            <TooltipProvider>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <Calendar className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors size-4' />
                            <div className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 text-xs text-black/60 dark:text-white/60">{blog.date}</div>
                            <Tooltip>
                                <TooltipTrigger>
                                <div className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 text-xs text-black/60 dark:text-white/60"><Icon/></div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{category.label}</p>
                                </TooltipContent>
                            </Tooltip>
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
            </TooltipProvider>
        </Link>
    );
}