import { Slider } from "@/components/ui/slider";

export const slider = {
  name: "slider",
  components: {
    Default: (
      <Slider defaultValue={[50]} max={100} step={1} className="mt-5 w-[60%]" />
    ),
  },
};
