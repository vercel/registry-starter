import { Inter } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

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

export default function RootLayout({
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
        "bg-background text-foreground"
      )}
    >
      <body>
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
