'use client'

import { columns } from "@/components/leetcodeComp/columns"
import { DataTable } from "@/components/leetcodeComp/data-table"
import { leetcodes as getQ } from "@/data"
import React from "react"

export default function Page() {
  const [randomQuestion, setRandomQuestion] = React.useState('')

  React.useEffect(() => {
    if(getQ){
      setRandomQuestion(getQ[Math.floor(Math.random() * getQ.length)].titleSlug)
    }
  }, [])

  if (!getQ) {
    return <div className="h-full flex-1 flex-col space-y-8 px-4 sm:px-8 sm:py-4 md:flex max-w-6xl">
      Leetcode Solution does not exist
    </div>;
  }

  return (
    <>
      <div className=" p-4 max-w-6xl mx-auto">
        <div>
          <DataTable data={getQ} columns={columns} random={randomQuestion} />
        </div>
      </div>
    </>
  )
}