"use client";

import Link from "next/link";
import { useEffect } from "react";

import {
  MobileSidebarTrigger,
  RegistrySidebar,
} from "@/components/registry/registry-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <RegistrySidebar />
      <main className="flex w-full justify-center">
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
          <h1 className="font-bold text-6xl text-muted-foreground tracking-tight md:text-8xl">
            500
          </h1>
          <h2 className="mt-4 font-bold text-2xl tracking-tight md:text-3xl">
            Something went wrong
          </h2>
          <div className="mt-6 flex gap-3">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="secondary" asChild>
              <Link href="/r/registry.json">View Registry</Link>
            </Button>
          </div>
        </div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
