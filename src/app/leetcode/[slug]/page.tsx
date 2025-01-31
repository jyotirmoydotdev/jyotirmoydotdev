import Content from "@/components/leetcodeComp/content"
import { leetcodes } from "@/data"
import { ArrowUpRight } from "lucide-react"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const { default: Leetcode } = await import(`@/markdown/leetcode/${slug}.mdx`)
    const leetcodeindex = leetcodes.findIndex((leetcode) => leetcode.titleSlug === slug);
    const leetcode = leetcodes[leetcodeindex]
    if (!leetcode){
        return (
            <>could not found</>
        )
    }
    return (
        <div className="relative">
            <div className='p-4 gap-4 flex flex-row justify-center pl-4 sm:pl-8'>
                <div className="">
                    <div className="flex gap-1 text-2xl font-bold font-sans">
                        <span>{leetcode.id}.</span>
                        <span>{leetcode.title}</span>
                    </div>
                    <div className="flex gap-2 pt-4">
                        <span className={`px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent ${(leetcode.difficulty === 'Easy') ? "text-green-500" :
                            (leetcode.difficulty === 'Hard') ? "text-red-500" : "text-yellow-500"
                            }`}>{leetcode.difficulty}</span>
                        {
                            leetcode.topicTags.map((item: string, i: number) => (
                                <span key={i} className='px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent'>
                                    {item}
                                </span>
                            ))
                        }
                        <a href={`https://leetcode.com/problems/${leetcode.titleSlug}/description/`} target="_blank" rel="noopener noreferrer" className='px-1.5 text-sm py-0.5 rounded-md bg-sidebar-accent'>
                            <ArrowUpRight className="text-orange-400 size-5" />
                        </a>
                    </div>
                    <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert mt-4">
                        <Leetcode />
                    </div>
                </div>
                <Content leetcodeContent={leetcode.content} leetcodeDataIndex={leetcodeindex} />
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return leetcodes.flatMap((leetcode) => { return { slug: leetcode.titleSlug } })
}

export const dynamicParams = false