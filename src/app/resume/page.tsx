"use client"

import { Resume } from "@/resume"
import Link from "next/link"

function Page() {
  return (
    <div className="flex justify-center bg-gray-100 dark:bg-gray-900 py-10">
      <div id="resume" className="w-[210mm] min-h-[297mm] bg-white shadow-lg p-[20mm] text-sm space-y-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{Resume.title}</h1>
          <p className="text-md text-gray-600 font-semibold">{Resume.role}</p>
          <p className="text-xs text-gray-500 italic">{Resume.subTitle}</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-3 text-xs border-b pb-3">
          {Resume.resumeLinks.map((link, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-gray-700 font-medium">{link.label}</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Professional Summary</h2>
          <p className="text-xs text-gray-700 leading-relaxed">
            {Resume.summary.split(/\*\*(?=[^\*]*\*\*)/g).map((part, i) => {
              if (i % 2 === 1) return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>
              return part.replace(/\*\*/g, '')
            })}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {Resume.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium">
                {tech.label}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Experience</h2>
          <div className="space-y-3">
            {Resume.experiences.map((exp, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-xs text-gray-600">{exp.subTitle}</p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="font-semibold text-gray-700">{exp.duration[0].start} — {exp.duration[0].end}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <ul className="text-xs text-gray-700 mt-1 ml-4 space-y-1">
                  {exp.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="list-disc text-gray-700">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-2">
                  {exp.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Education</h2>
          <div className="space-y-3">
            {Resume.educations.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.title}</h3>
                    <p className="text-xs text-gray-600">{edu.subTitle}</p>
                  </div>
                  <div className="text-right text-xs text-gray-700">
                    <p className="font-semibold">{edu.start} — {edu.end}</p>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-xs text-gray-700 mt-1">{edu.description}</p>
                )}
                {edu.bullets.length > 0 && (
                  <ul className="text-xs text-gray-700 mt-1 ml-4 space-y-1">
                    {edu.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Skills</h2>
          <div className="space-y-2">
            {Resume.skills.map((skill, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-900 text-xs">{skill.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Projects</h2>
          <div className="space-y-3">
            {Resume.projects.map((proj, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{proj.title}</h3>
                    <p className="text-xs text-gray-600">{proj.subTitle}</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-semibold">
                    {proj.status}
                  </span>
                </div>
                <ul className="text-xs text-gray-700 mt-1 ml-4 space-y-1">
                  {proj.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
