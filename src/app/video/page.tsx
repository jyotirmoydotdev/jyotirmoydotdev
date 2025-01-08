import { video } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2  gap-4'>
      {
        video.map((item, i)=>(
            <iframe className='aspect-video h-auto w-full rounded-md' key={i} width="full" height="auto" src={`https://youtube.com/embed/${item.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        ))
      }
    </div>
  )
}

export default page