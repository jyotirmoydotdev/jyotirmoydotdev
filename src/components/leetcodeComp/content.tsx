'use client'

import { blogs, leetcodes } from '@/data';
import { AlignLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, useSidebar } from '../ui/sidebar';
import { ContentComp } from '../mdx-comp';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const Content = ({ leetcodeDataIndex, leetcodeContent }: { leetcodeDataIndex: number, leetcodeContent: (string | string[])[] }) => {
    const sideBarSize = 300
    const blogSize = 578.4 + 32
    const contentSize = 298
    const { open } = useSidebar()
    const [showContent, setShowContent] = useState(true);
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        const updateWidth = () => {
            if (typeof window !== "undefined") {
                setWindowSize(window.innerWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, [])
    useEffect(() => {
        const remainingWidth = open
            ? windowSize - sideBarSize - blogSize
            : windowSize - blogSize;
        setShowContent(remainingWidth >= contentSize);
    }, [open, windowSize, blogSize]);
    return (
        <Sidebar
            style={
                {
                    "--sidebar-width": "298px",
                } as React.CSSProperties
            }
            variant='sidebar' side='right' collapsible="none"
            className={`top-[5.5rem] sticky rounded-md bg-transparent hidden ${showContent ? "sm:block" : ""}`}
        >
            <SidebarHeader className="px-4 pt-0">
                <AlignLeft className="text-gray-500" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className="pb-[5rem] pl-3">
                            {
                                leetcodeContent && <ContentComp contents={leetcodeContent} />
                            }
                            {leetcodes.length > 2 && (
                                <>
                                    <div className="pb-2 pt-4 font-bold text-orange-400">More Leetcode</div>
                                    <Separator className="max-w-[260px]" />
                                    {
                                        Array(2).fill(null).map((_, i) => {
                                            const post = leetcodes.at((leetcodeDataIndex + i + 1) % blogs.length)!
                                            return (
                                                <Link key={i} href={post?.titleSlug} className='max-w-[260px] flex flex-col gap-2 py-2 group/more hover:bg-gray-100/10 hover:pl-2 transition-all rounded-md mt-2'>
                                                    <div className=" font-black group-hover/more:text-orange-400 line-clamp-2 text-sm">
                                                        {post.id}{". "}{post.title} - <span className=' text-muted-foreground'>{post.difficulty}</span>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </>)
                            }
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default Content