import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/components/header";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jyotirmoy Barman - Developer & Creator",
  description: "Discover the world of Jyotirmoy Barman, a passionate developer crafting innovative web experiences. Explore projects, blogs, and more at jyotirmoy.dev.",
  openGraph: {
    title: "Jyotirmoy Barman - Developer & Creator",
    description: "Welcome to the portfolio of Jyotirmoy Barman. Dive into cutting-edge web development projects, insights, and resources.",
    url: 'https://jyotirmoy.dev/',
    siteName: "Jyotirmoy Barman - Portfolio",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jyotirmoydotdev',
    title: "Jyotirmoy Barman - Developer & Creator",
    description: "Check out the latest projects and updates from Jyotirmoy Barman, a web developer passionate about creating exceptional digital experiences.",
    creator: '@jyotirmoydotdev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider
            style={
              {
                "--sidebar-width": "250px",
              } as React.CSSProperties
            }
            defaultOpen={true}
          >
            <AppSidebar />
            <SidebarInset>
              <Header />
              {children}
              <Analytics />
              <SpeedInsights />
              <Toaster />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
