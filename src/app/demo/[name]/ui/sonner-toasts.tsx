"use client";

import { toast } from "sonner";

import { Button } from "@/registry/new-york/ui/button";

export function Sonner() {
  return <Button onClick={() => toast("Toast")}>Normal Toast</Button>;
}

export function SuccessfulSonner() {
  return (
    <Button variant="outline" onClick={() => toast.success("Successful")}>
      Successful Toast
    </Button>
  );
}

export function WarningSonner() {
  return (
    <Button
      variant="outline"
      onClick={() => toast.warning("This is a warning")}
    >
      Warning Toast
    </Button>
  );
}

export function ErrorSonner() {
  return (
    <Button
      variant="destructive"
      onClick={() => toast.error("There was an error")}
    >
      Error Toast
    </Button>
  );
}

export function ActionSonner() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Toast with an Action", {
          description: "A description with some more information",
          action: {
            label: "Action",
            onClick: () => console.log("Action!"),
          },
        })
      }
    >
      Action Toast
    </Button>
  );
}
