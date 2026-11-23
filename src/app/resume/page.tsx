'use client'

import dynamic from 'next/dynamic'

const ResumePDF = dynamic(() => import('@/components/resume-pdf'), {
  ssr: false,
})

export default function ResumePage() {
  return <ResumePDF />
}
