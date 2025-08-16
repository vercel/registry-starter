import { Badge } from "@/registry/new-york/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const badge = {
  name: "badge",
  components: {
    Default: <Badge>Badge</Badge>,
    Secondary: <Badge variant="secondary">Secondary</Badge>,
    Outline: <Badge variant="outline">Secondary</Badge>,
    Destructive: <Badge variant="destructive">Destructive</Badge>,

    DefaultLink: (
      <Badge>
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    SecondaryLink: (
      <Badge variant="secondary">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    OutlineLink: (
      <Badge variant="outline">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    DestructiveLink: (
      <Badge variant="destructive">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
  },
};
