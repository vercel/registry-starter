import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

export const alert = {
  name: "alert",
  components: {
    Default: (
      <Alert>
        <Terminal className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    Destructive: (
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
  },
};
