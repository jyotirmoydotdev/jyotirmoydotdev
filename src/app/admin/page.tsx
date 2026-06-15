export default function Page() {
  return (
    <div className="p-4">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-2 gap-6">
        <div className="flex flex-col justify-between gap-6 py-6 group/project w-full sm:bg-accent/40 border-b sm:border hover:dark:border-orange-50/20 hover:border-orange-200 hover:bg-accent/50 sm:hover:scale-105 transition-all rounded-none sm:rounded-xl">
          <div className="flex flex-col gap-2">
            <div className=" text-sm text-muted-foreground font-medium px-6">
              Total Blogs
            </div>
            <div className=" text-3xl font-semibold px-6">10</div>
          </div>
          <div className="text-muted-foreground px-6 text-sm">
            Last updated on 24/5/26
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 py-6 group/project w-full sm:bg-accent/40 border-b sm:border hover:dark:border-orange-50/20 hover:border-orange-200 hover:bg-accent/50 sm:hover:scale-105 transition-all rounded-none sm:rounded-xl">
          <div className="flex flex-col gap-2">
            <div className=" text-sm text-muted-foreground font-medium px-6">
              Total Projects
            </div>
            <div className=" text-3xl font-semibold px-6">10</div>
          </div>
          <div className="text-muted-foreground px-6 text-sm">
            Last updated on 24/5/26
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 py-6 group/project w-full sm:bg-accent/40 border-b sm:border hover:dark:border-orange-50/20 hover:border-orange-200 hover:bg-accent/50 sm:hover:scale-105 transition-all rounded-none sm:rounded-xl">
          <div className="flex flex-col gap-2">
            <div className=" text-sm text-muted-foreground font-medium px-6">
              Total Practice Questions
            </div>
            <div className=" text-3xl font-semibold px-6">10</div>
          </div>
          <div className="text-muted-foreground px-6 text-sm">
            Last updated on 24/5/26
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 py-6 group/project w-full sm:bg-accent/40 border-b sm:border hover:dark:border-orange-50/20 hover:border-orange-200 hover:bg-accent/50 sm:hover:scale-105 transition-all rounded-none sm:rounded-xl">
          <div className="flex flex-col gap-2">
            <div className=" text-sm text-muted-foreground font-medium px-6">
              Total Courses
            </div>
            <div className=" text-3xl font-semibold px-6">0</div>
          </div>
          <div className="text-muted-foreground px-6 text-sm">
            Last updated on 24/5/26
          </div>
        </div>
      </div>
    </div>
  );
}
