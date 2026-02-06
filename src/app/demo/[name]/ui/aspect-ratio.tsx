import { AspectRatio } from "@/components/ui/aspect-ratio";

export const aspectRatio = {
  name: "aspect-ratio",
  components: {
    Default: (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
          <div className="flex h-full items-center justify-center text-muted-foreground">
            16:9 Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    ),
  },
};
