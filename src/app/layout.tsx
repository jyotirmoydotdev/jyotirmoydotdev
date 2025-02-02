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
  title: "Jyotirmoy Barman",
  description: "Jyotirmoy Barman | jyotirmoy.dev | @jyotirmoydotdev",
  openGraph: {
    title: "Jyotirmoy Barman",
    description: "Hello, I'm Jyotirmoy Barman, visit my site to know more",
    url: 'https://jyotirmoy.dev/',
    siteName: "Jyotirmoy Barman",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jyotirmoydotdev',
    title: "Jyotirmoy Barman",
    description: "Hello, I'm Jyotirmoy Barman, visit my site to know more",
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
