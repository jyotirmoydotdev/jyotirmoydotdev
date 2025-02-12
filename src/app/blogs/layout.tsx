import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Blogs - Jyotirmoy Barman",
  description: "Read the latest insights and tutorials from Jyotirmoy Barman on web development, innovation, and more.",
  openGraph: {
    title: "Blog - Jyotirmoy Barman",
    description: "Dive into deep-dive articles and insights on the latest web development trends and technologies.",
    url: "https://jyotirmoy.dev/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Jyotirmoy Barman",
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    description: "Check out the latest blog posts by Jyotirmoy Barman on web development and innovative digital experiences.",
  },
  alternates:{
    canonical:'https://jyotirmoy.dev/blogs'
  }
};


const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] h-full'>
        {children}
    </div>
  )
}

export default Layout