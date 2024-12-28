'use client'

import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
    const path = usePathname();
    const paths = path.split('/')
    const path2 = paths.at(2) ? paths.at(2)?.split('-').map((word) => word).join(' '): "";

    return (
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background/50 z-10 backdrop-blur-md p-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList className='flex-nowrap '>
                    <BreadcrumbItem className="">
                        <BreadcrumbLink className=' capitalize' asChild>
                            <Link href={`/${paths.at(1)}`}>
                                {paths.at(1) ? paths.at(1) : 'About'}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {
                        paths.at(2) && <BreadcrumbSeparator />
                    }
                    <BreadcrumbItem>
                        <BreadcrumbPage className='capitalize line-clamp-1'>
                            {path2}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}

export default Header