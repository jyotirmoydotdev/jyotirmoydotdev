"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  // SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { sidebar_data as data } from "@/data"
import { usePathname } from "next/navigation";
import logo from "../../public/logo.png";
import { HiOutlineDocumentText } from "react-icons/hi2";


const baloo = localFont({
  src: '../fonts/Baloo2-VariableFont_wght.ttf',
  weight: '800',
  display: 'swap',
})

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { openMobile, setOpenMobile } = useSidebar()
  const path = usePathname()
  function isActiveFunc(pathname: string, path: string) {
    return path === "/" ? pathname === "/" : (path.startsWith(pathname) && pathname !== "/");
  }
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <Link href={"/"} className="flex gap-2 items-center h-8">
          <Image src={logo} placeholder="blur" width={100} height={100} alt="" className="flex aspect-square size-7 items-center justify-center rounded-lg object-contain text-sidebar-primary-foreground" />
          <span className={`truncate font-semibold text-xl leading-tight text-gray-700 dark:text-white pl-1 ${baloo.className}`}>
            Jyotirmoy
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {
              data.navMain.map((item, i) => (
                <SidebarMenuButton isActive={isActiveFunc(item.url, path)} onClick={() => setOpenMobile(!openMobile)} key={i} tooltip={item.title} asChild>
                  <Link href={item.url} className=" flex justify-between group/link">
                    <div className=" flex gap-2 items-center">
                      <item.icon className=" size-4" />
                      <span className="font-semibold text-nowrap">{item.title}</span>
                    </div>
                    <div className=" scale-0 transition-all group-hover/link:scale-100">
                      <ChevronRight className=" size-4" />
                    </div>
                  </Link>
                </SidebarMenuButton>
              ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="mb-4">
          {
            data.bottomMain.map((item, i) => (
              <SidebarMenuButton isActive={isActiveFunc(item.url, path)}  onClick={() => setOpenMobile(!openMobile)} key={i} tooltip={item.title} asChild>
                <Link href={item.url} className=" flex justify-between group/link">
                  <div className=" flex gap-2 items-center">
                    <item.icon className=" size-4" />
                    <span className="font-semibold text-nowrap">{item.title}</span>
                  </div>
                  <div className=" scale-0 transition-all group-hover/link:scale-100">
                    <ChevronRight className=" size-4" />
                  </div>
                </Link>
              </SidebarMenuButton>
            ))
          }
          <SidebarMenuButton>
            <div className="flex gap-2 items-center group/link">
              <HiOutlineDocumentText className="size-4" />
              <div className="">
                <span className="text-xs text-gray-500 font-semibold text-nowrap hover:text-white">Terms</span>
                <span className="text-xs text-gray-500 font-semibold text-nowrap"> | </span>
                <span className="text-xs text-gray-500 font-semibold text-nowrap hover:text-white">Privacy</span>
              </div>
            </div>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
