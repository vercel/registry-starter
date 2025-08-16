import { Promo } from "@/registry/new-york/components/promo";

export const promo = {
  name: "promo",
  components: {
    Default: (
      <Promo
        title="Get up to 50% off"
        description="All products on sale until April 15th."
        buttonText="Shop now"
        buttonLink="#promo"
        backgroundImage="/assets/promo.png"
      />
    ),
  },
};
