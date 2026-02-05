'use client'

import { ResumeType } from "@/resume";
import { ExternalLink, Folder, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectType = ResumeType["projects"][number]
type ProjectStatusType = ResumeType["projects"][number]["status"]

function ProjectCard({ project }: { project: ProjectType }) {
  const router = useRouter();
  function getStatusClass(status: ProjectStatusType) {
    switch (status) {
      case "Concept":
        return "bg-yellow-200/50 dark:text-yellow-200 text-yellow-700"
      case "In Progress":
        return "bg-blue-200/50 dark:text-blue-200 text-blue-700"
      case "Production":
        return "bg-green-200/50 dark:text-green-200 text-green-700"
      case "Archive":
        return "bg-gray-200/50 dark:text-gray-200 text-gray-700"
      default:
        return "bg-gray-200/50 dark:text-gray-200 text-gray-700"
    }
  }
  return (
    <div
      onClick={() => {
        router.push(project.path || "/projects")
      }}
      className="flex flex-col gap-4 p-4 group/project w-full bg-accent/40 border hover:border-orange-50/20 hover:bg-accent/50 hover:scale-105 transition-all rounded-xl"
    >
      <div className="flex justify-between">
        <div className="flex-row flex gap-2">
          <Folder className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
          <div className={`text-xs px-3 py-1 outline-1 outline rounded-md font-bold ${getStatusClass(project.status)}`}>
            {project.status}
          </div>
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
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="dark:group-hover/project:text-orange-50 group-hover/project:text-orange-950 hover:stroke-orange-500 transition-colors" />
            </Link>
          )}
        </div>
      </div>
      <div className=" font-black text-base sm:text-lg font-sans dark:group-hover/project:text-orange-400 group-hover/project:text-orange-500 transition-colors">
        {project.title}
      </div>
      <div className="text-xs sm:text-sm dark:text-white/80 text-black/80 group-hover/project:text-orange-900 dark:group-hover/project:text-orange-100 transition-colors">
        {project.subTitle}
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
  )
}

export default ProjectCard;
