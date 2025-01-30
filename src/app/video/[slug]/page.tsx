import { video } from '@/data'
import React from 'react'

const page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const slug = (await params).slug
    const vid = video.find(v=>v.id===slug)
    if (vid == undefined){
        return (
            <div className="">
                Sorry no video found
            </div>
        )
    }
  return (
    <div className='p-4'>
        <iframe className=' aspect-video w-full h-full rounded-lg' width="560" height="315" src={`https://www.youtube.com/embed/${vid.id}`} 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default page