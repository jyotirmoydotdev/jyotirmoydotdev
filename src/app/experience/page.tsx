import { Separator } from '@/components/ui/separator'
import { experience } from '@/data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div className='p-4'>
            <div  id="experiences">
                <div className="text-lg font-bold py-2 text-orange-400">
                    Experiences
                </div>
                <Separator />
                <div className="flex flex-col gap-6 pt-6">
                    {experience.map((exp, i) => (
                        <Link key={i} href={exp.companyUrl} className="group/exp">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group-hover/exp:bg-accent/40 p-2 transition-all">
                                <div className="text-gray-500 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                                    {exp.startDate} - {exp.endDate}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <div className="flex gap-2 items-center py-2 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                                            {exp.position}, {exp.company}
                                            <ArrowUpRight className="size-5" />
                                        </div>
                                        <div className="px-2 py-1 text-xs rounded-lg bg-muted/50 text-gray-700 dark:text-gray-300  w-fit">
                                            {exp.location}
                                        </div>
                                    </div>
                                    <div className="text-gray-500 group-hover/exp:text-gray-700 dark:group-hover/exp:text-gray-400">{exp.description}</div>
                                    <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
                                        {exp.tags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className="px-2 py-1 rounded-lg bg-muted/50"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page