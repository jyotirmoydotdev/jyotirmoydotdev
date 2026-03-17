import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { projects } from "@/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ projectid: string }>;
}) => {
  const pid = (await params).projectid;
  const data = projects.find((p) => p.id == pid);

  if (!data) {
    notFound();
  }
  return (
    <div className=" flex max-w-6xl mx-auto ">
      <Sidebar
        style={
          {
            "--sidebar-width": "298px",
            "--sidebar-height": "80vh",
          } as React.CSSProperties
        }
        variant="sidebar"
        side="right"
        collapsible="none"
        className={`top-[5.3rem] sticky rounded-lg hidden sm:block p-2 pl-4 border`}
      >
        <SidebarHeader className=" border-b px-0">
          <Link
            href={`/projects/` + data.id}
            className=" flex flex-row gap-1 items-center text-orange-500 hover:text-orange-600 hover:dark:text-orange-400"
          >
            <ChevronLeft />
            <span className="font-bold ">Tasks List</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <div className="pb-[10rem] h-[calc(100vh-30rem)] no-scrollbar overflow-scroll">
                <div className="flex flex-col gap-2">
                  {data.tasks.map((task, index) => (
                    <Link
                      href={"/projects/" + data.id + "/tasks/" + task.id}
                      key={index}
                      className={`py-1 px-2 rounded-md hover:bg-gray-700/50 transition-all`}
                    >
                      Task {index}: {task.title}
                    </Link>
                  ))}
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="col-span-2">{children}</div>
    </div>
  );
};

export default Layout;
