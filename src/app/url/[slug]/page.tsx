import { urlshort } from "@/data";
import { redirect } from "next/navigation";
import { PiLinkBreak } from "react-icons/pi";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug.toLowerCase();

  const targetUrl = urlshort.get(slug);

  if (targetUrl) {
    redirect(targetUrl);
  }

  return (
    <div className="flex-1 flex justify-center items-center h-full w-full">
      <div className="flex flex-row gap-2 justify-center items-center">
        <PiLinkBreak />
        <span>Link not found</span>
      </div>
    </div>
  );
}
