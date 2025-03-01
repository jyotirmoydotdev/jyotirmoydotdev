"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ColumnHeader } from "./column-header"
import { ArrowUpRight, FileCheck, FileVideo, FileX } from "lucide-react"
import Link from "next/link"
import { leetcodeType } from "@/data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export const columns: ColumnDef<leetcodeType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (<ColumnHeader className="pl-4" column={column} title="No." />),
    cell: ({ row }) => {
      return (
        <span className="pl-4 ">{row.original.id}</span>
      )
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<ColumnHeader column={column} title="Title" />),
    cell: ({ row }) => {
        return (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
            <TooltipTrigger className="max-w-[130px] sm:max-w-[302px] truncate h-5 hover:text-blue-700 dark:hover:text-blue-400">
              {row.getValue('title')}
            </TooltipTrigger>
            <TooltipContent className="bg-muted backdrop-blur-sm gap-2 px-2 py-2 text-black dark:text-white ounded-sm border hidden sm:flex">
              {row.getValue('title')}
            </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
    },
  },
  {
    accessorKey: "topicTags",
    header: ({ column }) => (<ColumnHeader column={column} title="Tags" />),
    cell: ({ row }) => {
      const tags: string[] = row.getValue("topicTags");
      return (
        <div className="flex space-x-2 font-medium text-xs">
          {tags?.length ? (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="flex gap-2">
                  <span className="rounded-sm bg-muted line-clamp-1 px-1.5 py-0.5">{tags[0]}</span>
                  {tags.length > 1 && (
                    <span className="rounded-sm bg-muted px-1.5 py-0.5">+{tags.length - 1}</span>
                  )}
                </TooltipTrigger>
                <TooltipContent className="bg-muted backdrop-blur-sm flex gap-2 px-2 py-2 text-black dark:text-white">
                  {tags.map((tag,i)=>(
                      <span key={i} className="rounded-sm border px-1.5 py-0.5">{tag}</span>
                  ))}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <span className="rounded-sm bg-muted px-1.5 py-0.5">No Tags</span>
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const tags: string[] = row.getValue("topicTags");
      tags.map((tag) => {
        if (tag === value as string) {
          return true
        }
      })
      return false
    }
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Difficulty" />
    ),
    cell: ({ row }) => {
      const difficulty: string = row.getValue("difficulty")
      return (
        <span className={`${(difficulty === "Medium") ? "text-yellow-500" : ((difficulty === "Easy") ? "text-green-500" : "text-red-500")}`}
        >{difficulty}</span>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "hasSolution",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Solution" />
    ),
    cell: ({ row }) => {
      const hasSol = row.getValue("hasSolution")
      if (hasSol) {
        return (
          <div className="flex gap-2">
            <FileCheck className="text-blue-400 size-5" />
            {
              row.original.hasVideoSolution && <FileVideo className="text-[#b260ea] size-5" />
            }
          </div>
        )
      } else {
        return (
          <FileX className="text-gray-400 size-5" />
        )
      }
    }
  },
  {
    accessorKey: "titleSlug",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Leetcode" />
    ),
    cell: ({ row }) => {
      const slug = row.getValue('titleSlug')
      return (
        <Link href={`https://leetcode.com/problems/${slug}/description/`} target="_blank">
          <ArrowUpRight className="text-orange-400 size-5" />
        </Link>
      )
    }
  },
]