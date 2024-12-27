'use client'

import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects, sidebar_data as data } from '@/data'
import { ExternalLink, Folder, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { BiLogoGoLang, BiLogoDocker, BiLogoTypescript, BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { useIsMobile } from "@/hooks/use-mobile";


const baloo = localFont({
  src: '/fonts/Baloo2-VariableFont_wght.ttf',
  weight: '800',
  display: 'swap',
})

export default function Home() {
  const router = useRouter()
  const isMobile = useIsMobile()
  return (
    <div className="p-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="">
          <header className="flex flex-col gap-2">
            <div className={`text-4xl sm:text-6xl text-orange-400 font-extrabold ${baloo.className}`}>Jyotirmoy Barman</div>
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Software Engineer
              </span>
              {"/"}
              <span className="text-sm sm:text-lg text-gray-500">Bringing ideas to reality</span>
            </div>
          </header>
          {/* <div className="py-4 text-sm sm:text-base dark:text-gray-300 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quisquam hic nam aut porro consequatur laborum veniam, perspiciatis maiores molestiae, nulla excepturi libero illum cumque nemo est repellendus beatae mollitia, at sapiente! Nulla amet voluptatibus sunt repudiandae nesciunt aspernatur architecto?
          </div> */}
          <div className="py-4 text-sm sm:text-base dark:text-gray-300 text-gray-700">
          As a passionate developer, I thrive on turning ideas into fully-realized, impactful products. With a strong command of modern technologies like TypeScript, React, Next.js, and Go, I specialize in creating seamless, high-performance applications that deliver real value. Having worked with teams across the globe, I’m well-versed in the dynamics of remote collaboration, ensuring that distance never gets in the way of building something exceptional. Whether it&apos;s designing the user interface or architecting back-end systems, I&apos;m driven by the challenge of bringing innovative solutions to life.
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start sm:gap-6 items-center">
            <BiLogoTypescript className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500"/>
            <BiLogoGoLang     className=" hover:rotate-45 transition-all size-[4rem] sm:size-[4.5rem] fill-gray-400 dark:fill-gray-500"/>
            <RiNextjsFill     className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500"/>
            <BiLogoDocker     className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500"/>
            <BiLogoPostgresql className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500"/>
            <BiLogoReact      className=" hover:rotate-45 transition-all size-[2rem] sm:size-[3rem] fill-gray-400 dark:fill-gray-500"/>
            <SiSolidity       className=" hover:rotate-45 transition-all size-[1.8rem] sm:size-[2.2rem] fill-gray-400 dark:fill-gray-500"/>
          </div>
        </div>
        <div className=" items-center h-full flex justify-center py-4 sm:justify-end">
          <div className="flex flex-row sm:flex-col gap-2">
            {
              data.links.map((link, i) => (
                <Button key={i} variant={'outline'} size={'icon'} className="group/link hover:bg-muted/80 rounded-lg bg-muted size-8 relative" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="scale-100 group-hover/link:scale-0 transition-all" />
                    <ArrowUpRight className="absolute scale-0 group-hover/link:scale-100 transition-all" />
                  </a>
                </Button>
              ))
            }
            <Button variant={'outline'} size={'icon'} className="group/link hover:bg-muted/80 rounded-lg bg-muted size-8 relative" asChild>
              <a href="mailto:jyotirmoydotdev@gmail.com">
                <Mail className="scale-100 group-hover/link:scale-0 transition-all" />
                <ArrowUpRight className="absolute scale-0 group-hover/link:scale-100 transition-all" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-8" id="experiences">
        <div className="text-lg font-bold py-2 text-orange-400">Experiences</div>
        <Separator />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 pt-6">
          <div className="text-gray-500">Jan 2024 - Apr 2024</div>
          <div className="flex flex-col gap-2">
            <Link href={'https://loreum.org'} className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors">
              Ethereum Engineer, Loreum DAO
              <ArrowUpRight className="size-5" />
            </Link>
            <div className="text-gray-500">
            I contributed to the development of the Loreum platform, working with technologies like React, TypeScript, and GraphQL to help build efficient and user-friendly applications alongside a talented team.
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">Ethereum</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">TypeScript</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Solidity</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">GraphQL</div>
            </div>
          </div>
          <div className="text-gray-500">Mar 2023 - June 2023</div>
          <div className="flex flex-col gap-2">
            <Link href={"https://daotimes.com"} className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors">
              Technical Writer, DAO Times
              <ArrowUpRight className="size-5" />
            </Link>
            <div className="text-gray-500">
              I contributed to DAO Times, researching and writing about the latest in DeFi and NFTs. Worked closely with editors to create informative and engaging content.
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">Article Research</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Proposal Summaries</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Editing and Proofreading</div>
            </div>
            <Link href={"https://daotimes.com"} className="flex gap-2 items-center pt-4 pb-2 hover:text-orange-500 transition-colors">
              Intern, DAO Times
              <ArrowUpRight className="size-5" />
            </Link>
            <div className="text-gray-500">
              Assisted in gathering voter feedback on DAO proposals by engaging with participants across various DAOs, evaluating responses, and analyzing insights regarding our latest article on the relevant proposal to support content relevance and audience engagement.
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">Feedback Collection</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Blockchain Research</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Content Analysis</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8" id="projects">
        <div className="text-lg text-orange-400 font-bold py-2 inline-flex justify-between items-center w-full">
          Projects
          <div className="flex w-full justify-end py-4">
            <Button variant={'link'} size={'default'} asChild>
              <Link href={'/projects'}>View all <ArrowRight className=" size-5" /> </Link>
            </Button>
          </div>
        </div>
        {/* <Separator /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {
            projects.slice(0, 3).map((project, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(project.url)
                }}
                className="flex flex-col gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 hover:scale-105 transition-all rounded-xl"
              >
                <div className="flex justify-between">
                  <div className="">
                    <Folder className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                  </div>
                  <div className="flex gap-4">
                    {
                      project.source && (
                        <Link href={project.source} target="_blank" rel="noopener noreferrer">
                          <Github className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                        </Link>
                      )
                    }
                    {
                      project.externalUrl ?
                        (
                          <Link href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                          </Link>
                        ) :
                        (
                          <Link href={project.url}>
                            <ExternalLink className='dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors' />
                          </Link>
                        )
                    }
                  </div>
                </div>
                <div className=" font-black text-base sm:text-lg font-sans dark:group-hover/project:text-orange-400 group-hover/project:text-orange-500 transition-colors">
                  {project.title}
                </div>
                <div className="text-xs sm:text-sm dark:text-white/80 text-black/80 group-hover/project:text-orange-900 dark:group-hover/project:text-orange-100 transition-colors">
                  {project.description}
                </div>
                <div className="flex gap-2 flex-wrap text-xs text-black/60 dark:text-white/60">
                  {
                    project.tags.map((tag, i) => (
                      <div key={i} className=" py-1 px-2 rounded-md bg-muted/90 dark:bg-muted/50 ">{tag}</div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="pt-8" id="educations">
        {/* <Separator /> */}
        <div className="text-lg font-bold pt-6 pb-4 text-orange-400">Educations</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="flex flex-col gap-2">
            <Link href={"https://www.cuchd.in"} className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors">
              Chandigarh University
              <ArrowUpRight className="size-5" />
            </Link>
            <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <span className="text-gray-700 dark:text-gray-300">
                Bachelor Of Computer Application
              </span>
              <div className=" hidden sm:block size-1 bg-gray-500 rounded-full"></div>
              <span className="text-gray-500">
                Jul 2021 - Jun 2024
              </span>
            </div>
            <div className="text-gray-500">
              Completed a Bachelor of Computer Applications at Chandigarh University with a <span className="text-white">7.23 CGPA</span>. Gained knowledge in data structures, algorithms, and software development. Participated in hackathons and developed projects showcasing problem-solving and coding skills.  
            </div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">Data Structures</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Algorithms</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Programming</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={"http://kvsangathan.nic.in"} className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors">
              Kendriya Vidyalaya
              <ArrowUpRight className="size-5" />
            </Link>
            <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <span className="text-gray-700 dark:text-gray-300">
                Higher Secondary, Science
              </span>
              <div className=" size-1 bg-gray-500 rounded-full hidden sm:block"></div>
              <span className="text-gray-500">
                Apr 2020 - Feb 2021
              </span>
            </div>
            <div className="text-gray-500">Completed Higher Secondary Education in Science Stream with <span className="text-white">75 Percent</span>. Excelled in computer science and participated in extracurricular activities, demonstrating a balance of academic and co-curricular engagement.</div>
            <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
              <div className="px-2 py-1 rounded-lg bg-muted/50">Computer Science</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Academic Excellence</div>
              <div className="px-2 py-1 rounded-lg bg-muted/50">Extracurricular Activities</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" sticky bottom-4 flex justify-end w-full">
        <Button size={isMobile?'icon':"sm"} className=" rounded-lg bg-orange-500/60 hover:bg-orange-600/60 backdrop-blur-md text-white">
          <span className=" hidden sm:block">Download</span>
          <span className=" block sm:hidden"><ArrowDown/></span>
        </Button>
      </div>
    </div>
  );
}
