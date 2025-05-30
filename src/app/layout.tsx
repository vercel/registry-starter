import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/fonts.css";
import "@/app/tokens.css";
import "@/app/tailwind.css";

export const metadata: Metadata = {
  title: "Registry Starter",
  description: "Starter to help build a Shadcn Registry using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background font-sans text-foreground">
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">{children}</body>
    </html>
  );
}
