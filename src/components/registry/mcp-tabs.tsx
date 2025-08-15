"use client";

import { Check, ClipboardIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { AddToCursor } from "@/components/registry/add-to-cursor";
import { Button } from "@/components/ui/button";

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value);
}

export function MCPTabs({ rootUrl }: { rootUrl: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  const mcp = {
    command: "npx -y shadcn@canary registry:mcp",
    env: {
      REGISTRY_URL: `https://${rootUrl}/r/registry.json`,
    },
  };

  const mcpServer = JSON.stringify(
    {
      mcpServers: {
        shadcn: mcp,
      },
    },
    null,
    2
  );

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  }, [hasCopied]);

  return (
    <div>
      <div className="relative">
        <div className="absolute top-3 right-3 flex gap-2">
          <AddToCursor mcp={mcp} />

          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              copyToClipboard(mcpServer);
              setHasCopied(true);
            }}
          >
            {hasCopied ? <Check /> : <ClipboardIcon />}
            Copy
          </Button>
        </div>

        <pre className="mt-16 overflow-x-auto rounded-lg border bg-muted p-1 sm:mt-0">
          <code className="relative rounded bg-transparent p-1 font-mono text-muted-foreground text-sm">
            {mcpServer}
          </code>
        </pre>
      </div>
    </div>
  );
}
