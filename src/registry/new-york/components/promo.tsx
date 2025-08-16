import Image from "next/image";
import Link from "next/link";

import { Button } from "@/registry/new-york/ui/button";

export function Promo({
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
    <div className="relative h-[300px] w-full bg-foreground/10">
      <div className="relative z-10 flex h-full flex-col justify-center gap-3 px-8 py-3">
        <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
          {title}
        </h1>
        <p>{description}</p>
        <div>
          <Button asChild size="lg" className="rounded-md">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
