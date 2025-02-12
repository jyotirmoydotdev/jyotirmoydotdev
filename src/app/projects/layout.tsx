import React, { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Projects - Jyotirmoy Barman',
  alternates:{
    canonical: `https://jyotirmoy.dev/projects`
  },
  openGraph:{
    title:'Projects - Jyotirmoy Barman',
  },
  twitter:{
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    card: "summary_large_image",
    title:'Projects - Jyotirmoy Barman',
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