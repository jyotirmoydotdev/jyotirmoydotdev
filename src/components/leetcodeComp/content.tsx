'use client'

import { leetcodes } from '@/data';
import { AlignLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, useSidebar } from '../ui/sidebar';
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
                    "--sidebar-height": "80vh"
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
                        <div className="pb-[10rem] pl-3 h-[calc(100vh-20rem)] no-scrollbar overflow-scroll">
                            {
                                <ContentComp contents={leetcodeContent} />
                            }
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className=' fixed -bottom-2'>
                    {/* <SidebarOptInForm variant='dark'/> */}
                    <SidebarMenu className=' px-4 pt-4 pb-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground  justify-start rounded-t-[0.5rem] bg-sidebar text-sm shadow-none'>
                        <div className=" font-bold text-orange-400">More Leetcode</div>
                        <Separator  />
                        {
                            Array(2).fill(null).map((_, i) => {
                                const post = leetcodes.at((leetcodeDataIndex + i + 1) % leetcodes.length)!
                                return (
                                    <Link key={i} href={post?.titleSlug} className='w-[260px] text-wrap flex flex-col gap-2 py-2 group/more hover:bg-gray-100/10 px-2 transition-all rounded-md mt-2'>
                                        <div className=" font-black group-hover/more:text-orange-400 line-clamp-2 text-sm">
                                            {post.id}{". "}{post.title} - <span className=' text-muted-foreground'>{post.difficulty}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default Content