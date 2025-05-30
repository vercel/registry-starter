import { ArrowRight, Blocks, ToyBrick } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Button", path: "/components/button" },
  { name: "Card", path: "/components/card" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];

const blockItems = [
  { name: "Hero", path: "/blocks/hero" },
  { name: "Login", path: "/blocks/login" },
  { name: "Promo", path: "/blocks/promo" },
];

export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      <div className="mb-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            Registry
          </h1>
          <p className="text-muted-foreground">
            A collection of components and blocks for your design system
          </p>
        </div>
      </div>

      <div className="mb-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Components</CardTitle>
              <div className="rounded-md bg-primary p-1">
                <ToyBrick className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Reusable UI components for your application
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {componentItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link href={item.path} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Blocks</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <Blocks className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Pre-built UI blocks for common patterns
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {blockItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link href={item.path} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">About the Registry Starter</h2>
          <p className="text-muted-foreground">
            This registry serves as a central repository for all UI components
            and blocks used in your applications. It helps maintain consistency
            across your products and speeds up development by providing
            ready-to-use components. Each component and block is documented with
            examples. You can browse components by category, search for specific
            components, and view examples of how they are used in different
            contexts.
          </p>
          <p className="mt-2 text-muted-foreground">
            To get begin, select a{" "}
            <a href="/starters" className="underline">
              starter
            </a>{" "}
            and click the <span className="font-bold">Open in v0</span> button.
            You can also open individual components or blocks in v0 if you want
            a smaller or more specific starting point.
          </p>

          <p className="mt-4 ">
            <a href="https://github.com/willsather/registry-starter">
              <svg
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                role="graphics-symbol"
                className="mr-1 inline size-4 fill-muted-foreground"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#1B1F23"
                />
              </svg>
              <span className="underline">GitHub Repository</span>
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
