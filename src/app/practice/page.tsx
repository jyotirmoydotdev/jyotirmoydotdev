'use client'

import { columns } from "@/components/practice/columns"
import { DataTable } from "@/components/practice/data-table"
import { alltags, practices as getQ } from "@/data"
import { Archive, Database, Route, Terminal } from "lucide-react"
import { FaNodeJs } from "react-icons/fa";
import React from "react"
import { RiFlowChart } from "react-icons/ri"
import { SiPandas } from "react-icons/si"

export default function Page() {
  const [randomQuestion, setRandomQuestion] = React.useState('')

  React.useEffect(() => {
    if (getQ) {
      setRandomQuestion(getQ[Math.floor(Math.random() * getQ.length)].titleSlug)
    }
  }, [])

  if (!getQ) {
    return <div className="h-full flex-1 flex-col space-y-8 px-4 sm:px-8 sm:py-4 md:flex max-w-6xl">
      Solution does not exist
    </div>;
  }

  return (
    <>
      <div className=" p-2 sm:p-4 max-w-7xl mx-auto">
        {/* <div className=" bg-sidebar p-3 sm:p-6 mb-4 flex justify-between items-center border-sidebar-border border"> */}
        {/*   <div className="flex flex-col"> */}
        {/*     <div className=" text-base sm:text-2xl font-semibold mb-2"> */}
        {/*       Practice Solutions */}
        {/*     </div> */}
        {/*     <div className="max-w-[553px] mb-2 text-muted-foreground text-xs sm:text-base"> */}
        {/*       Explore expertly crafted Golang-based solutions designed to streamline your problem-solving process, enhance coding efficiency, and boost your programming skills with clear step-by-step guides. */}
        {/*     </div> */}
        {/*   </div> */}
        {/*   <div className="p-2 hidden sm:block"> */}
        {/*     <FileCode2 className="size-[3rem]" color="#f97316" /> */}
        {/*   </div> */}
        {/* </div> */}
        <div className="grid mb-4">
          <div className='flex gap-2 overflow-x-scroll no-scrollbar'>
            {
              alltags.map((tag, i) => (
                <div key={i} className=" bg-muted/50 border text-xs sm:text-sm text-nowrap px-4 py-1.5 rounded-lg text-muted-foreground">
                  {tag.label}
                </div>
              ))
            }
          </div>
        </div>
        <div className="grid mb-4">
          <div className="flex gap-2 sm:gap-4 overflow-x-scroll no-scrollbar font-semibold text-muted-foreground text-xs sm:text-sm">
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2 text-foreground text-nowrap">
              <Archive className="size-4" />
              <span>All Topics</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <RiFlowChart className=" fill-orange-500 size-4" />
              <span>Algorithms</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <Database className=" stroke-blue-500 size-4" />
              <span>Database</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <Terminal className=" stroke-green-500 size-4" />
              <span>Shell</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <Route className=" stroke-pink-500 size-4" />
              <span>Concurrency</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <FaNodeJs className=" fill-sky-500 size-4" />
              <span>JavaScript</span>
            </div>
            <div className="flex py-[10px] px-4 bg-sidebar rounded-full items-center border border-sidebar-border space-x-2">
              <SiPandas className=" fill-indigo-500 size-4" />
              <span>pandas</span>
            </div>
          </div>
        </div>
        <div>
          <DataTable data={getQ} columns={columns} random={randomQuestion} />
        </div>
      </div >
    </>
  )
}
