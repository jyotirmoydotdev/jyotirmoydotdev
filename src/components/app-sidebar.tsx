"use client"

import * as React from "react"
import { ArrowUpRight, ChevronRight } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { sidebar_data as data } from "@/data"

const baloo = localFont({
    src: '../fonts/Baloo2-VariableFont_wght.ttf',
    weight: '800',
    display: 'swap',
})

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { openMobile, setOpenMobile } = useSidebar()
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <Link href={"/"} className="flex gap-2 items-center h-8 pl-0.5">
                    <Image src={'/logo.png'} width={100} height={100} alt="" className="flex aspect-square size-7 items-center justify-center rounded-lg object-contain text-sidebar-primary-foreground" />
                    <span className={`truncate font-semibold text-xl leading-tight text-gray-700 dark:text-white pl-1  pr-5 ${baloo.className}`}> {/**bg-[rgb(237,109,86)] text-white dark:bg-inherit dark:text-[rgb(237,109,86)] */}
                        Jyotirmoy-dev
                    </span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {
                            data.navMain.map((item, i) => (
                                <SidebarMenuButton onClick={() => setOpenMobile(!openMobile)} key={i} tooltip={item.title} asChild>
                                    <Link href={item.url} className=" flex justify-between group/link">
                                        <div className=" flex gap-2 items-center">
                                            <item.icon  className=" size-4"/>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className=" scale-0 transition-all group-hover/link:scale-100">
                                            <ChevronRight className=" size-4"/>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {
                        data.links.map((link, i) => (
                            <SidebarMenuItem key={i} >
                                <SidebarMenuButton tooltip={link.social} asChild>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center group/link hover:bg-muted/80 rounded-lg">
                                        <Button variant={'ghost'} className="size-4 px-0 rounded-none relative">
                                            <link.icon className="scale-100 group-hover/link:scale-0 transition-all" />
                                            <ArrowUpRight className="absolute scale-0 group-hover/link:scale-100 transition-all" />
                                        </Button>
                                        <span>
                                            {link.social}
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
