import React, { type ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex w-full justify-center">
      <div className="container">{children}</div>
    </main>
  );
}
