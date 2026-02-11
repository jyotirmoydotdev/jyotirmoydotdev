import Content from "@/components/practice/content"
import { practices } from "@/data"
import { ArrowUpRight } from "lucide-react"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const { default: Practice } = await import(`@/markdown/practice/${slug}.mdx`)
    const practiceindex = practices.findIndex((practice) => practice.titleSlug === slug);
    const practice = practices[practiceindex]
    if (!practice){
        return (
            <div>could not found</div>
        )
    }
    return (
        <div className="relative">
            <div className='p-4 gap-4 flex flex-row justify-center pl-4 sm:pl-8'>
                <div className=" max-w-xl">
                    <div className=" text-2xl font-bold font-sans">
                        <span>{practice.id}.</span>{' '}<span>{practice.title}</span>
                    </div>
                    <div className="flex gap-2 pt-4 flex-wrap">
                        <span className={`px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent ${(practice.difficulty === 'Easy') ? "text-green-500" :
                            (practice.difficulty === 'Hard') ? "text-red-500" : "text-yellow-500"
                            }`}>{practice.difficulty}</span>
                        {
                            practice.topicTags.map((item: string, i: number) => (
                                <span key={i} className='px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent'>
                                    {item}
                                </span>
                            ))
                        }
                        <a href={`https://practice.com/problems/${practice.titleSlug}/description/`} target="_blank" rel="noopener noreferrer" className='px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent'>
                            <ArrowUpRight className="text-orange-400 size-5" />
                        </a>
                    </div>
                    <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert mt-4">
                        <Practice />
                    </div>
                </div>
                <Content practiceContent={practice.content} practiceDataIndex={practiceindex} />
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return practices.flatMap((practice) => { return { slug: practice.titleSlug } })
}

export const dynamicParams = false
