import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "LeetCode Solutions - Jyotirmoy Barman",
  description: "Sharpen your coding skills with curated LeetCode Solutions by Jyotirmoy Barman. Dive into algorithm problems, explore efficient solutions, and boost your problem-solving prowess.",
  openGraph: {
    title: "LeetCode Solutions - Jyotirmoy Barman",
    description: "Sharpen your coding skills with curated LeetCode Solutions by Jyotirmoy Barman. Dive into algorithm problems, explore efficient solutions, and boost your problem-solving prowess.",
    url: "https://jyotirmoy.dev/leetcode",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    title: "LeetCode Solutions - Jyotirmoy Barman",
    description:"Join Jyotirmoy Barman in conquering LeetCode Solutions. Enhance your coding skills with expert insights, problem-solving strategies, and step-by-step walkthroughs.",
  },
  alternates:{
    canonical: `https://jyotirmoy.dev/leetcode`
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
