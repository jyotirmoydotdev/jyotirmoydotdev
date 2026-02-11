'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Table } from "@tanstack/react-table"
import { Shuffle, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Facete } from './facet'
import { difficulties } from '@/data'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '@/hooks/use-mobile'

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    random: string
}

export function Toolbar<TData>({ table, random }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0
    const router = useRouter()
    const isMobile = useIsMobile()
    return (
        <div className='flex items-center justify-between gap-2'>
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder='Search questions'
                    value={table.getState().globalFilter}
                    onChange={e => table.setGlobalFilter(String(e.target.value))}
                    className="h-8 w-4/5 lg:w-[250px] border-none bg-[#fafafa] dark:bg-[#18181b]"
                />
                {
                    (isMobile == false) &&
                    <>
                        {table.getColumn("difficulty") && (
                            <Facete
                                column={table.getColumn("difficulty")}
                                title="Difficulty"
                                options={difficulties}
                            />
                        )}
                        {isFiltered && (
                            <Button
                                variant="ghost"
                                onClick={() => table.resetColumnFilters()}
                                className="h-8 px-2 lg:px-3"
                            >
                                Reset
                                <X />
                            </Button>
                        )}
                    </>
                }
            </div>
            {
                isMobile ? (
                    <Button
                        onClick={() => {
                            router.push(`/practice/${random}`)
                        }}
                        disabled={random == "" ? true : false}
                        size={'icon'} variant={'secondary'} className="flex gap-3 text-green-600 dark:text-green-400 items-center font-bold">
                        <Shuffle className='size-4' />
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            router.push(`/practice/${random}`)
                        }}
                        disabled={random == "" ? true : false}
                        size={'sm'} variant={'secondary'} className="flex gap-3 text-green-600 dark:text-green-400 items-center font-bold">
                        <Shuffle className='size-4' /> Pick One
                    </Button>
                )
            }
        </div>
    )
}