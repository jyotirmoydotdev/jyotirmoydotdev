import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Capitalize } from '@/lib/misc'
 
export async function generateMetadata({ params }:{params: Promise<{ slug: string }>}): Promise<Metadata> {
  const slug = (await params).slug
  return {
    title: Capitalize(slug),
    alternates:{
      canonical: `https://jyotirmoy.dev/blogs/${slug}`
    },
    openGraph: {
        title: Capitalize(slug),
        description: `Read the blog name ${Capitalize(slug)}`,
        url: `https://jyotirmoy.dev/blogs/${slug}`,
        siteName: "Jyotirmoy Barman - Blogs",
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@jyotirmoydotdev',
        title: Capitalize(slug),
        description: `Read the blog name ${Capitalize(slug)}`,
        creator: '@jyotirmoydotdev',
    },
  }
}

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout