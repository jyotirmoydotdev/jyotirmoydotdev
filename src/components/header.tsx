'use client'

import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

function Capitalize(str: string): string {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace(/-/g, " ");
}


const Header = () => {
    const path = usePathname();
    const paths = path.split('/')
    // const path2 = paths.at(2) ? paths.at(2)?.split('-').map((word) => word).join(' ') : "";

    return (
        <header className="sticky top-0 flex justify-between shrink-0 items-center gap-2 border-b bg-background/50 z-10 backdrop-blur-md p-4">
            <div className="flex justify-start items-center gap-2">
                <Image width={100} height={100} alt='Jyotirmoy Barman' className=' sm:hidden rounded-lg size-7' src={'/jyotirmoy.webp'}></Image>
                <SidebarTrigger className="" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList className='flex flex-nowrap'>
                        {paths.slice(1).map((path, index) => {
                            const isLast = index === paths.length - 2;
                            const href = `/${paths.slice(1, index + 2).join("/")}`;

                            return (
                                <React.Fragment key={index}>
                                    {index > 0 && <BreadcrumbSeparator className="" />}
                                    
                                     <BreadcrumbItem className="">
                                            <BreadcrumbLink asChild>
                                                <Link href={href} className={` line-clamp-1  ${isLast && "text-black dark:text-white"}`}>
                                                    {/* {path.replace(/-/g, " ")} */}
                                                    {path===''?path:Capitalize(path)}
                                                </Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>

                                </React.Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <ModeToggle />
        </header>
    )
}

export default Header