import { AlignLeft } from 'lucide-react'
import React from 'react'
import Blog from "@/markdown/blog.mdx"
import { ContentComp } from '@/components/mdx-comp';

const contents: { url: string, title: string }[] = [
  { url: "#full-code", title: "Full Code" },
  { url: "#import-statements", title: "Import Statements" },
  { url: "#data-structures", title: "Data Structures" },
  { url: "#main-function-main()", title: "Main Function main" },
  { url: "#router-function-router()", title: "Router Function Router" },
  { url: "#validatebook-handler-function", title: "ValidateBook Handler Function" },
  { url: "#reflection-and-validation", title: "Reflection and Validation" },
  { url: "#response", title: "Response" },
  { url: "#test-using-thunder-client", title: "Test Using Thunder Client" },
  { url: "#test-with-curl", title: "Test With CURL" },
]

const page = () => {
  return (
    <div className=" relative">
      <div className='p-4 flex flex-row'>
        <div className=" w-[92vw] md:max-w-[578.4px] prose dark:prose-invert ">
          <Blog />
        </div>
        <div className=" hidden md:block pl-4 ml-4 ">
          <div className="sticky top-[5rem] pb-[5rem]">
            <AlignLeft />
            <ContentComp contents={contents} />
            {/* <div className="pb-2 pt-4 font-bold text-orange-400">More Blogs</div>
            <Separator/>
            <Link href={'#'} className='max-w-[260px] flex flex-col gap-2 py-2 group/more hover:bg-gray-100/10 hover:pl-2 transition-all rounded-md mt-2'>
              <div className=" font-black group-hover/more:text-orange-400 line-clamp-2 text-sm">JSON is in the correct format with all the required fields</div>
              <div className="text-xs text-gray-500 line-clamp-2">In this article, we will construct a pipeline to validate JSON data against predefined structures. For example, suppose w</div>
              <div className="text-xs text-gray-500">6 min read | Aug 19, 2023</div>
            </Link>
            <Link href={'#'} className='max-w-[260px] flex flex-col gap-2 py-2 group/more hover:bg-gray-100/10 hover:pl-2 transition-all rounded-md mt-2'>
              <div className=" font-black group-hover/more:text-orange-400 line-clamp-2 text-sm">JSON is in the correct format with all the required fields</div>
              <div className="text-xs text-gray-500 line-clamp-2">In this article, we will construct a pipeline to validate JSON data against predefined structures. For example, suppose w</div>
              <div className="text-xs text-gray-500">6 min read | Aug 19, 2023</div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page