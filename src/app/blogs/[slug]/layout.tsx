import type { Metadata } from 'next'
import { Capitalize } from '@/lib/misc'
import { ReactNode } from 'react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    return {
        title: Capitalize(slug),
        openGraph: {
            title: Capitalize(slug),
            url: `https://jyotirmoy.dev/blog/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            site: "@jyotirmoydotdev",
            creator: "@jyotirmoydotdev",
            title: Capitalize(slug),
        },
        alternates:{
            canonical: `https://jyotirmoy.dev/blogs/${slug}`
        }
    }
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout