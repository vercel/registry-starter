"use client";

import { Check, Copy } from "lucide-react";
import { type ReactElement, type ReactNode, useState } from "react";

import { OpenInV0Button } from "@/components/design/open-in-v0";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getComponent } from "@/lib/utils";

interface ComponentCardProps {
  name: string;
  baseUrl: string;
  description?: string;
  title?: string;
  prompt?: string;
  promptTitle?: string;
  previewUrl?: string;
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export function ComponentCard({
  name,
  title,
  description,
  prompt,
  promptTitle,
  baseUrl,
  previewUrl,
  components,
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const component = getComponent(name);

  const registryUrl = `https://${baseUrl}/r/${name}.json`;
  const npxCommand = `npx shadcn@latest add ${registryUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(npxCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (component == null) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No registry item found</p>
      </div>
    );
  }

  return (
    <section>
      <Card id="starting-kit" className="border-foreground/25">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <CardTitle className="font-medium text-lg">{title}</CardTitle>

            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
              <CardDescription>
                {description ?? component.description}
              </CardDescription>

              <div className="flex items-center gap-4 sm:ml-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent className="font-mono">
                      Copy npx command
                    </TooltipContent>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        className="p-4"
                        aria-label="Copy npx command to clipboard"
                      >
                        {copied ? (
                          <Check className="size-4" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>

                <OpenInV0Button
                  registryUrl={registryUrl}
                  title={promptTitle}
                  prompt={prompt}
                />
              </div>
            </div>
          </div>
        </CardHeader>

        {(components || previewUrl) && (
          <CardContent className="flex flex-col items-center justify-center gap-4 rounded-md px-6">
            {components &&
              Object.entries(components).map(([key, node]) => (
                <div className="w-full" key={key}>
                  {node}
                </div>
              ))}

            {previewUrl && (
              <div
                className={
                  "h-[800px] w-full overflow-hidden rounded-md border border-border"
                }
              >
                <iframe
                  src={previewUrl}
                  className="h-full w-full"
                  title="Page Preview"
                />
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </section>
  );
}
