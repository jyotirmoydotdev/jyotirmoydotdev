import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Jyotirmoy Barman",
  alternates: {
    canonical: `https://jyotirmoy.dev/projects`,
  },
  openGraph: {
    title: "Projects - Jyotirmoy Barman",
  },
  twitter: {
    site: "@jyotirmoydotdev",
    creator: "@jyotirmoydotdev",
    card: "summary_large_image",
    title: "Projects - Jyotirmoy Barman",
  },
};

const Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) => {
  return (
    <div className=" max-w-6xl mx-auto flex flex-row ">
      <h1>Slug: {params.slug}</h1>
      {children}
    </div>
  );
};

export default Layout;
