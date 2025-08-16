import React, { type ReactNode } from "react";

import { BrandHeader } from "@/registry/new-york/components/brand-header";
import { BrandSidebar } from "@/registry/new-york/components/brand-sidebar";
import { SidebarProvider } from "@/registry/new-york/ui/sidebar";
import { Toaster } from "@/registry/new-york/ui/sonner";

export default function ShellLayout({
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
