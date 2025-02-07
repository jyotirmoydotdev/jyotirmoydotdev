import React from 'react'
import { IconType } from 'react-icons/lib'

const Linkwithlogo = (
  {
    text,
    url,
    icon,
  }: {
    text: string,
    url: string,
    icon: string | { icon: IconType, classname?: string }
  }
) => {
  return (
    <a aria-label={text} href={url} className="text-base inline-flex no-underline hover:bg-[#8883] bg-[#8882] px-1 rounded-sm py-0 items-baseline gap-1" target="_blank" rel="noopener">
      {
        typeof (icon) == 'string' ?
          <span className={`rounded-sm  bg-contain self-center bg-bottom bg-origin-padding p-1  bg-no-repeat inline-block h-[1.2em] w-[1.2em]`}
            style={{
              backgroundImage: `url(${icon})`
            }}
          /> : 
          <span className=' self-center'><icon.icon className={`${icon.classname}`}/></span>
      }
      {text}
    </a>
  )
}

export default Linkwithlogo