import { Progress } from "@/components/ui/progress";

export const progress = {
  name: "progress",
  components: {
    Default: <Progress value={33} className="mt-5 w-[60%]" />,
    "Half Complete": <Progress value={50} className="mt-5 w-[60%]" />,
    Complete: <Progress value={100} className="mt-5 w-[60%]" />,
  },
};
