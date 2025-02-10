import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Capitalize } from '@/lib/misc'
 
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug
    return {
        title: Capitalize(slug),
        openGraph: {
            title: Capitalize(slug),
            url: `https://jyotirmoy.dev/leetcode/${slug}`,
        },
        twitter: {
            title: Capitalize(slug),
        },
        alternates:{
            canonical: `https://jyotirmoy.dev/leetcode/${slug}`
        }
    }
};

const Layout = ({children}:{children:ReactNode}) => {
    return (
      <div>
          {children}
      </div>
    )
  }
  
  export default Layout