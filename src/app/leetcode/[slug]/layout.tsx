import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Capitalize } from '@/lib/misc'
 
export async function generateMetadata({ params }:{params: Promise<{ slug: string }>}): Promise<Metadata> {
  const slug = (await params).slug
  return {
    title: Capitalize(slug),
    openGraph: {
        title: Capitalize(slug),
        description: `Read the leetcode question ${Capitalize(slug)}`,
        url: `https://jyotirmoy.dev/leetcode/${slug}`,
        siteName: "Jyotirmoy Barman - Blogs",
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@jyotirmoydotdev',
        title: Capitalize(slug),
        description: `Read the leetcode question ${Capitalize(slug)}`,
        creator: '@jyotirmoydotdev',
    },
  }
}

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] h-full'>
        {children}
    </div>
  )
}

export default Layout