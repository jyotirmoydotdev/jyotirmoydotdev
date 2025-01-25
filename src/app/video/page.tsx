import { Button } from '@/components/ui/button'
import { video } from '@/data'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function convertToRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;

  return 'just now';
}

const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:p-4 gap-5">
      {
        video.map((vid, i) => (
          <Link href={`https://youtu.be/${vid.id}`} target='_blank' key={i} className="flex flex-col gap-2">
            <div className=" group/vid relative">
              <Button size={'icon'} variant={'secondary'} className="absolute top-4 right-4 transition-all scale-0 group-hover/vid:scale-100"><ArrowUpRight/></Button>
              <Image src={`https://i.ytimg.com/vi/${vid.id}/maxresdefault.jpg`} width={1280} height={720} alt={vid.title} className=' sm:rounded-lg aspect-video'></Image>
            </div>
            <span className='px-4 pt-2 text-sm sm:text-base sm:px-0 font-bold'>{vid.title}</span>
            <div className="text-xs sm:text-sm text-muted-foreground flex gap-2 px-4 sm:px-0">
              <span>Youtube</span>
              <span>•</span>
              <span>{convertToRelativeTime(vid.date)}</span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default page