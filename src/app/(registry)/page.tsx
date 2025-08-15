import Link from "next/link";

import { MCPTabs } from "@/components/registry/mcp-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";

const uiItems = getUIPrimitives();
const componentItems = getComponents();
const blockItems = getBlocks();

export default function Home() {
  return (
    <main className="container p-10">
      <div className="mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl">Registry</h1>
          <p className="text-muted-foreground">
            Distribute your design system tokens, custom components, hooks,
            pages, and other files to any React project.
          </p>
        </div>
      </div>
      <div className="mb-4 flex flex-row gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Blocks</CardTitle>
            <CardDescription>
              Pre-built starter kits for consistent, repeatable generations
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-2">
              {blockItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>
              Compound components using common patterns
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-2">
              {componentItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>UI Primitives</CardTitle>
            <CardDescription>
              Reusable UI primitives to build your components
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-2">
              {uiItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mb-4 rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">MCP</h2>
          <p className="mb-4 text-muted-foreground">
            Integrate this registry with AI IDEs using Model Context Protocol
            (MCP) using the following configuration. This utilizes this
            Registry's theme tokens and CSS variables with the Shadcn CLI. To
            ensure this works, double check that the{" "}
            <Link href="/r/registry.json">
              <code className="inline text-sm tabular-nums underline">
                style:theme
              </code>
            </Link>{" "}
            contains the same colors as your{" "}
            <code className="inline text-sm tabular-nums">tokens.css</code>
          </p>

          <MCPTabs rootUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""} />
        </div>
      </div>
    </main>
  );
}
