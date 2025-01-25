'use client'

import { projects } from '@/data'
import { ExternalLink, Folder, Github } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter()
    return (
        <div className="sm:p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                {
                    projects.map((project, i) => (
                            <div 
                                key={i} 
                                onClick={()=>{
                                    router.push(project.url)
                                }}
                                className="flex flex-col gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 sm:hover:scale-105 transition-all sm:rounded-xl"
                            >
                                <div className="flex justify-between">
                                    <div className="">
                                        <Folder className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                                    </div>
                                    <div className="flex gap-4">
                                        {
                                            project.source && (
                                                <Link href={project.source} target="_blank" rel="noopener noreferrer">
                                                    <Github className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                                                </Link>
                                            )
                                        }
                                        {
                                            project.externalUrl ?
                                                (
                                                    <Link href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                                                    </Link>
                                                ) :
                                                (
                                                    <Link href={project.url}>
                                                        <ExternalLink className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                                                    </Link>
                                                )
                                        }
                                    </div>
                                </div>
                                <div className=" font-black text-base sm:text-lg font-sans dark:group-hover/project:text-orange-400 group-hover/project:text-orange-500 transition-colors">
                                    {project.title}
                                </div>
                                <div className="text-xs sm:text-sm dark:text-white/80 text-black/80 group-hover/project:text-orange-900 dark:group-hover/project:text-orange-100 transition-colors">
                                    {project.description}
                                </div>
                                <div className="flex gap-2 flex-wrap text-xs text-black/60 dark:text-white/60">
                                    {
                                        project.tags.map((tag, i) => (
                                            <div key={i} className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 ">{tag}</div>
                                        ))
                                    }
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page
