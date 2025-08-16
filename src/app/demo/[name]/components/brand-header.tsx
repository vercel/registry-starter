import { BrandHeader } from "@/registry/new-york/components/brand-header";
import { SidebarProvider } from "@/registry/new-york/ui/sidebar";

export const brandHeader = {
  name: "brand-header",
  components: {
    Default: (
      <SidebarProvider>
        <BrandHeader />
      </SidebarProvider>
    ),
  },
};
