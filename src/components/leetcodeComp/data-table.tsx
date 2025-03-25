"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Toolbar } from "./toolbar"
import { Pagination } from "./pagination"
import { useIsMobile } from "@/hooks/use-mobile"
import { useRouter } from "next/navigation"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    random: string
}

export function DataTable<TData, TValue>({ columns, data, random }: DataTableProps<TData, TValue>,) {
    const isMobile = useIsMobile();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [globalFilter, setGlobalFilter] = useState<any>([])
    const router = useRouter()
    const [columnVisibility, setColumnVisibility] = useState(
        {
            topicTags: !isMobile,
            hasSolution: !isMobile,
            titleSlug: !isMobile
        });
    const [sorting, setSorting] = useState<SortingState>([
        {
            id: 'id',
            desc: false
        }
    ])
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            sorting,
            columnVisibility
        },
        initialState: {
            pagination: {
                pageSize: 50
            },
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })
    useEffect(() => {
        if (isMobile) {
            setColumnVisibility({
                topicTags: !isMobile,
                hasSolution: !isMobile,
                titleSlug: !isMobile
            });
        }
    }, [isMobile]);
    return (
        <div className=" space-y-4">
            <Toolbar table={table} random={random} />
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-[#fafafa] dark:bg-[#18181b]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        onClick={()=>{
                                            router.push(`/leetcode/${row.getValue('titleSlug')}`)
                                        }}
                                        className=" cursor-pointer"
                                    >
                                        {row.getVisibleCells().map((cell,i) => (
                                            <TableCell key={cell.id} width={i==1?'50%':''}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Pagination table={table} total={data.length} />
        </div>
    )
}
