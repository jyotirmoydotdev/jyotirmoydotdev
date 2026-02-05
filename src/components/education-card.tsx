import { ResumeType } from "@/resume"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Markdown from "react-markdown"

type EducationType = ResumeType["educations"][number]

function EducationCard({ education }: { education: EducationType }) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={"https://www.cuchd.in"}
        className="flex gap-2 items-center py-2 hover:text-orange-500 transition-colors"
      >
        {education.subTitle}
        <ArrowUpRight className="size-5" />
      </Link>
      <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center">
        <span className="text-gray-700 dark:text-gray-300">
          {education.title}
        </span>
        <div className=" hidden sm:block size-1 bg-gray-500 rounded-full"></div>
        <span className="text-gray-500">{education.start} - {education.end}</span>
      </div>
      <div className="text-gray-500">
        {education.description}
      </div>
      <div className="flex flex-col gap-2">
        {education.bullets.map((bullet, index) => (
          <Markdown className={"dark:hover:text-gray-200 dark:text-gray-300 text-gray-600 hover:text-gray-800"} key={index}>{bullet}</Markdown>
        ))}
      </div>

      <div className="flex gap-2 text-sm py-2 text-black/50 dark:text-white/50">
        {
          education.tags.map((tag, i) => (
            <div key={i} className="px-2 py-1 rounded-lg bg-muted/50">{tag}</div>
          ))}
      </div>
    </div>
  )
}

export default EducationCard
