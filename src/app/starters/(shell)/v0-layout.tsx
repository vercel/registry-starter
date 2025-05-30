import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";
import { Toaster } from "sonner";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import "@/app/tokens.css";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background font-sans text-foreground">
      <body>
        <SidebarProvider>
          <BrandHeader />
          <BrandSidebar />
          <main className="flex w-full justify-center">
            <div className="container">{children}</div>
          </main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
