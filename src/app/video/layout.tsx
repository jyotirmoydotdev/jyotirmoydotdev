import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title:'Videos - Jyotirmoy Barman',
  alternates:{
    canonical: `https://jyotirmoy.dev/video`
  },
  twitter:{
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    title: "Videos - Jyotirmoy Barman",
    card: "summary_large_image",
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