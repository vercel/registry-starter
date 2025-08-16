import { BrandSidebar } from "@/registry/new-york/components/brand-sidebar";
import { SidebarProvider } from "@/registry/new-york/ui/sidebar";

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <SidebarProvider>
        <BrandSidebar />
      </SidebarProvider>
    ),
  },
};
