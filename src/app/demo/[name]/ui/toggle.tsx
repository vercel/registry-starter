import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const toggle = {
  name: "toggle",
  components: {
    Default: (
      <Toggle aria-label="Toggle bold">
        <Bold className="size-4" />
      </Toggle>
    ),
    Outline: (
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="size-4" />
      </Toggle>
    ),
    "With Text": (
      <Toggle aria-label="Toggle underline">
        <Underline className="mr-2 size-4" />
        Underline
      </Toggle>
    ),
  },
};
