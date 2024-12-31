import Content from "@/components/content"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const { default: Blog } = await import(`@/markdown/${slug}.mdx`)
    return (
        <div className="relative">
            <div className='p-4 gap-4 flex flex-row justify-start pl-4 sm:pl-8'>
                <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert ">
                    <Blog />
                </div>
                <Content slug={slug}/>
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return [
        // { slug: 'intro-to-go-routine' },
        { slug: 'building-a-json-validation-pipeline-with-go-and-gin' },
        { slug: 'use-gin-web-framework-to-build-your-server' },
        { slug: 'learn-basics-of-sqlite' },
    ]
}

export const dynamicParams = false