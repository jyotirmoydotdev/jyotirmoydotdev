"use client";

import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Resume } from "@/resume";
import Markdown from 'react-markdown'
import ProjectCard from "@/components/project-card";
import EducationCard from "@/components/education-card";
import Image from "next/image";

const baloo = localFont({
  src: "../fonts/Baloo2-VariableFont_wght.ttf",
  weight: "800",
  display: "swap",
});

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="p-4 relative max-w-8xl mx-auto dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] border-x">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="">
          <header className="flex flex-col gap-2">
            <div
              className={`text-4xl sm:text-6xl text-orange-400 font-extrabold ${baloo.className}`}
            >
              {Resume.title}
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {Resume.role}
              </span>
              {"/"}
              <span className="text-sm sm:text-lg text-gray-500">
                {Resume.subTitle}
              </span>
            </div>
          </header>
          <div className="py-4 text-sm sm:text-base dark:text-gray-300 text-gray-700">
            <Markdown>
              {Resume.summary}
            </Markdown>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start sm:gap-6 items-center">
            {
              Resume.techStack.map((item, index) => (
                <item.icon key={index} className="hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
              ))
            }
          </div>
        </div>
        <div className=" items-center h-full flex justify-center py-4">
          <div className="flex sm:flex-row flex-col-reverse gap-4 items-center justify-end">
            <Image alt="profile photo" src={"/pic.jpg"} unoptimized width={240} height={240} className="rounded-3xl" />
            <div className="flex flex-row sm:flex-col gap-2">
              {Resume.links.map((link, i) => (
                <Button
                  key={i}
                  variant={"outline"}
                  size={"icon"}
                  className="group/link hover:bg-muted/80 rounded-lg bg-muted size-8 relative"
                  asChild
                >
                  <Link href={link.link} target="_blank" rel="noopener noreferrer">
                    <link.icon className="scale-100 group-hover/link:scale-0 transition-all" />
                    <ArrowUpRight className="absolute scale-0 group-hover/link:scale-100 transition-all" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8" id="experiences">
        <div className="text-lg font-bold py-2 text-orange-400">
          Experiences
        </div>
        <Separator />
        <div className="flex flex-col gap-6 pt-6">
          {Resume.experiences.map((exp, i) => (
            <Link key={i} href={exp.link} className="group/exp" target="_blank" rel="noopener noreferrer">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group-hover/exp:bg-accent/40 p-2 transition-all">
                <div className="">
                  {exp.duration.map((item, index) => (
                    <div className="pb-2" key={index}>
                      <div className="text-gray-500 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                        {item.start} - {item.end}
                      </div>
                      <div className="text-gray-500 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">{item.type}</div>
                    </div>
                  ))
                  }
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex gap-2 items-center py-2 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                      <span className="underline underline-offset-2">{exp.title}</span>,<span className="font-bold">{exp.subTitle}</span>
                      <ArrowUpRight className="size-5" />
                    </div>
                    <div className="px-2 pt-1 text-xs rounded-lg bg-muted/50 text-gray-700 dark:text-gray-300 w-fit">
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-gray-500 group-hover/exp:text-gray-700 dark:group-hover/exp:text-gray-400">{exp.description}</div>
                  <div className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, index) => (
                      <Markdown className={"dark:group-hover/exp:text-gray-200 dark:text-gray-300 text-gray-600 group-hover/exp:text-gray-800"} key={index}>{bullet}</Markdown>
                    ))}
                  </div>
                  <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
                    {exp.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 rounded-lg bg-muted/50"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-8" id="projects">
        <div className="text-lg text-orange-400 font-bold py-2 inline-flex justify-between items-center w-full">
          Projects
          <div className="flex w-full justify-end py-4">
            <Button
              variant={"link"}
              className="text-white"
              size={"default"}
              asChild
            >
              <Link href={"/projects"}>
                View all <ArrowRight className=" size-5" />{" "}
              </Link>
            </Button>
          </div>
        </div>
        {/* <Separator /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {Resume.projects.slice(0, 3).map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>

      <div className="pt-8" id="educations">
        {/* <Separator /> */}
        <div className="text-lg font-bold pt-6 pb-4 text-orange-400">
          Educations
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {
            Resume.educations.map((education, i) => (
              <EducationCard education={education} key={i} />
            ))
          }
        </div>
      </div>

      <div className=" sticky bottom-4 flex justify-end w-full">
        {isMobile ? (
          <Button
            size={"sm"}
            className=" rounded-lg bg-orange-500/60 hover:bg-orange-600/60 backdrop-blur-md text-white"
            asChild
          >
            <Link href={"/resume.pdf"} target="_blank">
              <ArrowDown className=" size-3" /> View Full Resume
            </Link>
          </Button>
        ) : (
          <TooltipProvider delayDuration={50}>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size={"icon"}
                  className=" rounded-lg bg-orange-500/60 hover:bg-orange-600/60 backdrop-blur-md text-white"
                  asChild
                >
                  <Link href={"/resume.pdf"} target="_blank">
                    <ArrowDown />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>View Full Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
