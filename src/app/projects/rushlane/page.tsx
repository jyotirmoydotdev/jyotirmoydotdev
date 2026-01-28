import Image from 'next/image'
import React from 'react'
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

function Page() {
  const images = [
    '/image/rushlane-1.png',
    '/image/rushlane-2.png',
    '/image/rushlane-3.png',
    '/image/rushlane-4.png',
    '/image/rushlane-5.png',
  ]
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <div className="flex flex-row">
        <div className="flex flex-row justify-center items-center">
          <Image src={"/image/rushlane-logo.png"} width={100} height={100} alt='rushlane logo' className=' rounded-2xl aspect-square' />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold ml-4">Rushlane: Food-in & Grocery</h1>
          <p className="text-gray-600 ml-4">A fast growing food delivery app</p>
          <div className="flex flex-row items-center ml-4 mt-2 gap-4">
            <div className="flex flex-row items-center py-2 px-4 border bg-white/50 rounded-xl">
              <FaGooglePlay size={32}/>
              <div className="flex flex-col ml-2">
                <span className="text-xs">GET IT ON</span>
                <span className="font-bold">Google Play</span>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 px-4 border bg-white/50 rounded-xl">
              <FaApple size={32}/>
              <div className="flex flex-col ml-2">
                <span className="text-xs">Download on the</span>
                <span className="font-bold">App Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row overflow-scroll no-scrollbar flex gap-4 mt-8">
        {images.map((src, index) => (
          <Image key={index} src={src} width={333} height={592} alt={`Rushlane screenshot ${index + 1}`} className="rounded-xl shadow-md" />
        ))}
      </div>
    </div>
  )
}

export default Page