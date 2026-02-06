import { cn } from "@/lib/utils";

export function FontBlock({ className }: { className: string }) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className={cn(className)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <code className="font-mono text-muted-foreground text-sm">
          --{className}
        </code>
      </div>
    </div>
  );
}
