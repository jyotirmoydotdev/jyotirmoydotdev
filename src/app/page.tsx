"use client";

import pic from "@/../public/pic.jpg"
import ProflieCard from "@/components/profile-card";
import GraphCard from "@/components/graph-card";

export default function Home() {
  return (
    <div className="p-4 h-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <ProflieCard
            pic={pic}
            name="Jyotirmoy Barman"
            email="Jyotirmoydotdev@gmail.com"
            subtitle="Software Engineer"
            className=""
          />
          <GraphCard className="col-span-2" />
        </div>
      </div>
    </div>
  );
}
