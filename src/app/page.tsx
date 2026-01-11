"use client";

import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects, sidebar_data as data, experience } from "@/data";
import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import {
  BiLogoGoLang,
  BiLogoDocker,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoReact,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const baloo = localFont({
  src: "../fonts/Baloo2-VariableFont_wght.ttf",
  weight: "800",
  display: "swap",
});

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <div className="p-4 relative max-w-8xl mx-auto dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] border-x">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="">
          <header className="flex flex-col gap-2">
            <div
              className={`text-4xl sm:text-6xl text-orange-400 font-extrabold ${baloo.className}`}
            >
              Jyotirmoy Barman
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Software Engineer
              </span>
              {"/"}
              <span className="text-sm sm:text-lg text-gray-500">
                Bringing ideas to reality
              </span>
            </div>
          </header>
          <div className="py-4 text-sm sm:text-base dark:text-gray-300 text-gray-700">
            I{`'`}m a passionate junior developer who loves turning ideas into
            tangible projects. With hands-on experience working on personal
            projects—from building a self-hosted e-commerce platform to
            developing a blog application—I{`'`}m constantly exploring new
            technologies and improving my skills. I{`'`}m proficient in tools
            like React, Next.js, and Go, and I{`'`}m excited to expand my
            technical toolkit while collaborating with talented teams. I{`'`}m
            enthusiastic, quick to learn, and always ready to take on challenges
            that help me grow as a developer.
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start sm:gap-6 items-center">
            <BiLogoTypescript className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
            <BiLogoGoLang className=" hover:rotate-45 transition-all size-[4rem] sm:size-[4.5rem] fill-gray-400 dark:fill-gray-500" />
            <RiNextjsFill className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
            <BiLogoDocker className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
            <BiLogoPostgresql className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
            <BiLogoReact className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500" />
            <SiSolidity className=" hover:rotate-45 transition-all size-[1.8rem] sm:size-[2.2rem] fill-gray-400 dark:fill-gray-500" />
          </div>
        </div>
        <div className=" items-center h-full flex justify-center py-4 sm:justify-end">
          <div className="flex flex-row sm:flex-col gap-2">
            {data.links.map((link, i) => (
              <Button
                key={i}
                variant={"outline"}
                size={"icon"}
                className="group/link hover:bg-muted/80 rounded-lg bg-muted size-8 relative"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="scale-100 group-hover/link:scale-0 transition-all" />
                  <ArrowUpRight className="absolute scale-0 group-hover/link:scale-100 transition-all" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8" id="experiences">
        <div className="text-lg font-bold py-2 text-orange-400">
          Experiences
        </div>
        <Separator />
        <div className="flex flex-col gap-6 pt-6">
          {experience.map((exp, i) => (
            <Link key={i} href={exp.companyUrl} className="group/exp">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group-hover/exp:bg-accent/40 p-2 transition-all">
                <div className="text-gray-500 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                  {exp.startDate} - {exp.endDate}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex gap-2 items-center py-2 group-hover/exp:text-orange-500 group-hover/exp:italic transition-all">
                      {exp.position}, {exp.company}
                      <ArrowUpRight className="size-5" />
                    </div>
                    <div className="px-2 py-1 text-xs rounded-lg bg-muted/50 text-gray-700 dark:text-gray-300  w-fit">
                      {exp.location}
                    </div>
                  </div>
                  <div className="text-gray-500 group-hover/exp:text-gray-700 dark:group-hover/exp:text-gray-400">{exp.description}</div>
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
          {projects.slice(0, 3).map((project, i) => (
            <div
              key={i}
              onClick={() => {
                router.push(project.url);
              }}
              className="flex flex-col gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 hover:scale-105 transition-all rounded-xl"
            >
              <div className="flex justify-between">
                <div className="">
                  <Folder className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
                </div>
                <div className="flex gap-4">
                  {project.source && (
                    <Link
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
                    </Link>
                  )}
                  {project.externalUrl ? (
                    <Link
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
                    </Link>
                  ) : (
                    <Link href={project.url}>
                      <ExternalLink className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
                    </Link>
                  )}
                </div>
              </div>
              <div className=" font-black text-base sm:text-lg font-sans dark:group-hover/project:text-orange-400 group-hover/project:text-orange-500 transition-colors">
                {project.title}
              </div>
              <div className="text-xs sm:text-sm dark:text-white/80 text-black/80 group-hover/project:text-orange-900 dark:group-hover/project:text-orange-100 transition-colors">
                {project.description}
              </div>
              <div className="flex gap-2 flex-wrap text-xs text-black/60 dark:text-white/60">
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8" id="educations">
        {/* <Separator /> */}
        <div className="text-lg font-bold pt-6 pb-4 text-orange-400">
          Educations
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="flex flex-col gap-2">
            <Link
              href={"https://www.cuchd.in"}
              className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors"
            >
              Chandigarh University
              <ArrowUpRight className="size-5" />
            </Link>
            <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <span className="text-gray-700 dark:text-gray-300">
                Bachelor Of Computer Application
              </span>
              <div className=" hidden sm:block size-1 bg-gray-500 rounded-full"></div>
              <span className="text-gray-500">Jul 2021 - Jun 2024</span>
            </div>
            <div className="text-gray-500">
              Completed a Bachelor of Computer Applications at Chandigarh
              University with a <span className="text-white">7.23 CGPA</span>.
              Gained knowledge in data structures, algorithms, and software
              development. Participated in hackathons and developed projects
              showcasing problem-solving and coding skills.
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">
                Data Structures
              </div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Algorithms</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">
                Programming
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={"http://kvsangathan.nic.in"}
              className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors"
            >
              Kendriya Vidyalaya
              <ArrowUpRight className="size-5" />
            </Link>
            <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <span className="text-gray-700 dark:text-gray-300">
                Higher Secondary, Science
              </span>
              <div className=" size-1 bg-gray-500 rounded-full hidden sm:block"></div>
              <span className="text-gray-500">Apr 2020 - Feb 2021</span>
            </div>
            <div className="text-gray-500">
              Completed Higher Secondary Education in Science Stream with{" "}
              <span className="text-white">75 Percent</span>. Excelled in
              computer science and participated in extracurricular activities,
              demonstrating a balance of academic and co-curricular engagement.
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">
                Computer Science
              </div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">
                Academic Excellence
              </div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">
                Extracurricular Activities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-8" id="blogs">
        <div className="text-lg text-orange-400 font-bold py-2 inline-flex justify-between items-center w-full">
          <div className=" flex gap-1"><span>Latest</span><span>Blogs</span></div>
          <div className="flex w-full justify-end py-4">
            <Button variant={'link'} size={'default'} asChild>
              <Link href={'/blogs'}>View all <ArrowRight className=" size-5" /> </Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {
            blogs.slice(0, 4).map((blog, i) => (
              <Link href={blog.url} key={i} className="flex flex-col gap-2 group/blog">
                <div className="py-2  group-hover/blog:text-orange-500 transition-colors">
                  {blog.title}
                </div>
                <div className=" text-gray-500 line-clamp-2 text-sm">{blog.description}</div>
                <div className="text-gray-500 text-sm">
                  {blog.date}
                </div>
              </Link>
            ))
          }
        </div>
      </div> */}

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
