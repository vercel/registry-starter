"use client";

import { FontBlock } from "@/app/(registry)/tokens/font-block";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div className="container p-10">
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="font-semibold text-3xl">Design Tokens</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of all color tokens used in the design system
        </p>
      </div>

      {/* Fonts */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Fonts</h2>
        <p className="mb-6 text-muted-foreground">
          The core font families that define the primary typography.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <FontBlock className="font-sans" />
          <FontBlock className="font-serif" />
          <FontBlock className="font-mono" />
        </div>
      </section>

      {/* Primary Theme */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Primary Theme</h2>
        <p className="mb-6 text-muted-foreground">
          The core colors that define the primary theme and overall look of the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Background" className="bg-background" />
          <ColorBlock name="Foreground" className="bg-foreground" />
          <ColorBlock name="Primary" className="bg-primary" />
          <ColorBlock
            name="Primary Foreground"
            className="bg-primary-foreground"
          />
        </div>
      </section>

      {/* Secondary & Accent */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Secondary & Accent</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for secondary elements and accents throughout the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Secondary" className="bg-secondary" />
          <ColorBlock
            name="Secondary Foreground"
            className="bg-secondary-foreground"
          />
          <ColorBlock name="Accent" className="bg-accent" />
          <ColorBlock
            name="Accent Foreground"
            className="bg-accent-foreground"
          />
        </div>
      </section>

      {/* UI Component */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">UI Component</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for specific UI components like cards, popovers, and muted
          elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Card" className="bg-card" />
          <ColorBlock name="Card Foreground" className="bg-card-foreground" />
          <ColorBlock name="Popover" className="bg-popover" />
          <ColorBlock
            name="Popover Foreground"
            className="bg-popover-foreground"
          />
          <ColorBlock name="Muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" className="bg-muted-foreground" />
        </div>
      </section>

      {/* Utility & Form */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Utility & Form</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock name="Border" className="bg-border" />
          <ColorBlock name="Input" className="bg-input" />
          <ColorBlock name="Ring" className="bg-ring" />
        </div>
      </section>

      {/* Status & Feedback */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Status & Feedback</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to indicate different states and provide feedback to
          users.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Destructive" className="bg-destructive" />
          <ColorBlock
            name="Destructive Foreground"
            className="bg-destructive-foreground"
          />
        </div>
      </section>

      {/* Chart & Visualization */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Chart & Visualization</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <ColorBlock name="Chart 1" className="bg-chart-1" />
          <ColorBlock name="Chart 2" className="bg-chart-2" />
          <ColorBlock name="Chart 3" className="bg-chart-3" />
          <ColorBlock name="Chart 4" className="bg-chart-4" />
          <ColorBlock name="Chart 5" className="bg-chart-5" />
        </div>
      </section>

      {/* Sidebar & Navigation */}
      <section className="mb-10">
        <h2 className="mb-4 font-semibold text-xl">Sidebar & Navigation</h2>
        <p className="mb-6 text-muted-foreground">
          Colors specific to the sidebar and navigation components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock name="Sidebar" className="bg-sidebar" />
          <ColorBlock
            name="Sidebar Foreground"
            className="bg-sidebar-foreground"
          />
          <ColorBlock name="Sidebar Primary" className="bg-sidebar-primary" />
          <ColorBlock
            name="Sidebar Primary Foreground"
            className="bg-sidebar-primary-foreground"
          />
          <ColorBlock name="Sidebar Accent" className="bg-sidebar-accent" />
          <ColorBlock
            name="Sidebar Accent Foreground"
            className="bg-sidebar-accent-foreground"
          />
          <ColorBlock name="Sidebar Border" className="bg-sidebar-border" />
          <ColorBlock name="Sidebar Ring" className="bg-sidebar-ring" />
        </div>
      </section>
    </div>
  );
}
