"use client";

import { ProjectType } from "@/data";
import { Separator } from "./ui/separator";
import { FaRegCircle } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetailSection({ data }: { data: ProjectType }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 pb-4">
          <div className="font-bold text-orange-500">Project</div>
          <div className="text-3xl font-bold">{data.title}</div>
          <div className="">{data.subTitle}</div>
          <div className="flex gap-2 flex-wrap">
            <div className="py-1 px-2 text-sm rounded-md bg-gray-200 dark:bg-gray-500/50">
              {data.status}
            </div>

            {data.tags.map((tag, index) => (
              <div
                key={index}
                className="py-1 px-2 text-sm rounded-md bg-gray-200 dark:bg-gray-500/50"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 sm:p-4">
          {data.imageurl && <Image src={data.imageurl} width={500} height={500} alt="Project Image" className="bg-gray-500 aspect-video rounded-lg "></Image>}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2 py-4">
        <div className="text-2xl font-bold">Project Description</div>
        <p>{data.description}</p>
      </div>
      <div className="pb-4">
        <div className="text-2xl font-bold mb-2">Project Tasks</div>
        <div className="flex flex-col gap-2 px-2 py-3 max-w-2xl bg-gray-100 dark:bg-[#18181b] rounded-lg border">
          {data.tasks.map((task, index) => (
            <Link
              href={"/projects/" + data.id + "/tasks/" + task.id}
              key={index}
              className=" rounded-md  hover:bg-gray-200/50 hover:dark:bg-gray-500/50 py-1.5 px-2 flex gap-2 items-center"
            >
              <FaRegCircle />{" "}
              <span>
                Task {index}: {task.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
