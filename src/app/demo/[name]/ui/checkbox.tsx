import { Checkbox } from "@/registry/new-york/ui/checkbox";

export const checkbox = {
  name: "checkbox",
  components: {
    Default: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    ),
  },
};
