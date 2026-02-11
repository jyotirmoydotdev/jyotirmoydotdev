import React, { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Practice - Jyotirmoy Barman",
  description: "Sharpen your coding skills with curated Solutions by Jyotirmoy Barman. Dive into algorithm problems, explore efficient solutions, and boost your problem-solving prowess.",
  openGraph: {
    title: "Practice - Jyotirmoy Barman",
    description: "Sharpen your coding skills with curated Solutions by Jyotirmoy Barman. Dive into algorithm problems, explore efficient solutions, and boost your problem-solving prowess.",
    url: "https://jyotirmoy.dev/practice",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    title: "Practice - Jyotirmoy Barman",
    description: "Join Jyotirmoy Barman in conquering Solutions. Enhance your coding skills with expert insights, problem-solving strategies, and step-by-step walkthroughs.",
  },
  alternates: {
    canonical: `https://jyotirmoy.dev/practice`
  }
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] h-full'>
      {children}
    </div>
  )
}

export default Layout
