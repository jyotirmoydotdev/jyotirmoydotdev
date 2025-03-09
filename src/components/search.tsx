"use client"

import * as React from "react"
import {
    File,
    Folder,
    SearchIcon,
    Video,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Button } from "./ui/button"
import { blogs, leetcodes, projects, video } from "@/data"
import Link from "next/link"
import { SiLeetcode } from "react-icons/si"

export function Search() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>

            <Button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 px-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground py-2 relative h-8 w-fit justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none ">
                <SearchIcon className=" size-4" />{" "}
                <kbd className="pointer-events-none text-sm text-muted-foreground inline-flex h-5 select-none items-center gap-1 rounded border bg-muted  font-mono text-[10px] font-medium opacity-100 px-1.5">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Blogs">
                        {blogs.map((blog, i) => (
                            <Link href={`/blogs/${blog.titleSlug}`} key={i}>
                                <CommandItem >
                                    <File />
                                    <span className="line-clamp-1 text-xs sm:text-sm">{blog.title}</span>
                                </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Videos">
                        {video.map((vid, i) => (
                            <Link href={`/video/${vid.id}`} key={i}>
                                <CommandItem>
                                    <Video />
                                    <span className="line-clamp-1 text-xs sm:text-sm">{vid.title}</span>
                                </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Leetcode">
                        {leetcodes.map((leetcode, i) => (
                            <Link href={`/leetcode/${leetcode.titleSlug}`} key={i}>
                            <CommandItem key={i}>
                                <SiLeetcode />
                                <span className="line-clamp-1 text-xs sm:text-sm">{leetcode.id}. {leetcode.title}</span>
                            </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Projects">
                        {projects.map((project, i) => (
                            <Link href={project.url} key={i}>
                            <CommandItem key={i}>
                                <Folder />
                                <span className="line-clamp-1 text-xs sm:text-sm">{project.title}</span>
                            </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
