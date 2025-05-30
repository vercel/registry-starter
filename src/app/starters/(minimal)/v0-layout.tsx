import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";
import "@/app/fonts.css";
import "@/app/tokens.css";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-background font-sans text-foreground"}>
      <body>
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
