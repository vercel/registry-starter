import { Hero } from "@/registry/new-york/components/hero";

export const hero = {
  name: "hero",
  components: {
    Default: (
      <Hero
        title="Build a Registry"
        description="This starter helps you create a registry so you can distribute your custom components, hooks, pages, and other files to any React project"
        buttonText="Learn more"
        buttonLink="#sale"
        backgroundImage="/assets/hero.png"
      />
    ),
  },
};
