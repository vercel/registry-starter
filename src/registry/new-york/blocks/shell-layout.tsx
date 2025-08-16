import { Inter } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { BrandHeader } from "@/registry/new-york/components/brand-header";
import { BrandSidebar } from "@/registry/new-york/components/brand-sidebar";
import { SidebarProvider } from "@/registry/new-york/ui/sidebar";
import { Toaster } from "@/registry/new-york/ui/sonner";

import "@/app/globals.css";

const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const InterMono = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

const InterSerif = Inter({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        InterSans.variable,
        InterMono.variable,
        InterSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <body>
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className="mt-16 flex w-full justify-center">
            <div className="container">{children}</div>
          </main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
