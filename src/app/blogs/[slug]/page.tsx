import Content from "@/components/content"
import { blogs } from "@/data"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const { default: Blog } = await import(`@/markdown/blogs/${slug}.mdx`)
    return (
        <div className="relative">
            <div className='p-4 gap-4 flex flex-row justify-center pl-4 sm:pl-8'>
                <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert ">
                    <Blog />
                </div>
                <Content slug={slug} />
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return blogs.flatMap((blog=>{return {slug: blog.titleSlug}}))
}

export const dynamicParams = false