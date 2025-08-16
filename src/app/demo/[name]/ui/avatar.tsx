import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar";

export const avatar = {
  name: "avatar",
  components: {
    Default: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
    Fallback: (
      <Avatar>
        <AvatarImage src="https://github.com" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
  },
};
