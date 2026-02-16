import Image from 'next/image'
import React from 'react'
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import Link from 'next/link';
import rushlanelogo from '@/../public/image/rushlane-logo.png'
import rushlane1 from '@/../public/image/rushlane-1.png'
import rushlane2 from '@/../public/image/rushlane-2.png'
import rushlane3 from '@/../public/image/rushlane-3.png'
import rushlane4 from '@/../public/image/rushlane-4.png'
import rushlane5 from '@/../public/image/rushlane-5.png'

function Page() {
  const images = [
    rushlane1,
    rushlane2,
    rushlane3,
    rushlane4,
    rushlane5,
  ]
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <div className="flex sm:flex-row">
        <div className="flex flex-row justify-center items-center">
          <Image src={rushlanelogo} placeholder='blur' width={100} height={100} alt='rushlane logo' className=' rounded-2xl aspect-square' />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-2xl font-bold ml-4">Rushlane: Food-in & Grocery</h1>
          <p className="text-gray-700 dark:text-gray-400 ml-4 text-sm sm:text-base">A fast growing food delivery app</p>
          <div className="flex flex-row items-center ml-4 mt-2 gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.rushlane.app" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center py-1.5 px-3 border bg-white/50 rounded-lg sm:rounded-xl hover:scale-105 transition-transform hover:bg-white/60">
                <FaGooglePlay className='size-6 sm:size-8' />
                <div className="hidden sm:flex flex-col ml-2">
                  <span className="text-xs">GET IT ON</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </div>
            </Link>
            <Link href="https://apps.apple.com/in/app/rushlane-food-in-grocery/id6748669157" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center py-1.5 px-3 border bg-white/50 rounded-lg sm:rounded-xl hover:scale-105 transition-transform hover:bg-white/60">
                <FaApple className='size-6 sm:size-8' />
                <div className="hidden sm:flex flex-col ml-2">
                  <span className="text-xs">Download on the</span>
                  <span className="font-bold">App Store</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-row overflow-scroll no-scrollbar flex gap-4 mt-8">
        {images.map((src, index) => (
          <Image key={index} placeholder='blur' src={src} width={333} height={592} alt={`Rushlane screenshot ${index + 1}`} className="rounded-xl shadow-md" />
        ))}
      </div>
      <div className="">
        <h2 className="text-xl font-bold mt-8 mb-4">About the app</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          Rushlane is a food delivery application developed for Rushlane Technologies. The app allows users to order food and groceries from local restaurants and have them delivered directly to their doorstep. Currently, the app serves over 1,000+ daily active users and is set to expand to more cities in the near future.
        </p>
      </div>
    </div>
  )
}

export default Page
