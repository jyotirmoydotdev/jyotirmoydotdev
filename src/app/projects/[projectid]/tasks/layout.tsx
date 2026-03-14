import { projects } from "@/data";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const data = projects[0];
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col gap-2">
        {data.tasks.map((task, index) => (
          <Link
            href={"/projects/" + data.id + "/tasks/" + task.id}
            key={index}
            className=""
          >
            {task.title}
          </Link>
        ))}
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
};

export default Layout;
