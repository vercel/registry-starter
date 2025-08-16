import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/registry/new-york/ui/badge";
import { Button } from "@/registry/new-york/ui/button";

export function Hero({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}) {
  return (
    <div className="relative h-[600px] w-full bg-foreground/10">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Coming soon
          </Badge>
          <h1 className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl">{description}</p>
          <div className="mt-10">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-md px-8"
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
