import React, { type ReactNode } from "react";
import { Toaster } from "sonner";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <BrandHeader />
      <BrandSidebar />
      <main className="flex w-full justify-center">
        <div className="container">{children}</div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
