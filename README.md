<a href="https://registry-starter.vercel.app/">
  <h1 align="center">Registry Starter</h1>
</a>

<p align="center">
    Registry Starter is a free, open-source template built with Next.js and Shadcn/ui Registry to accelerate your AI-Native Design System.
</p>

<p align="center">
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#mcp"><strong>MCP</strong></a> ·
  <a href="#authentication"><strong>Authentication</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## Deploy Your Own

You can deploy your own version of the Next.js Registry Starter to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=my-registry&repository-name=my-registry&demo-title=Registry%20Starter&demo-description=Registry%20Starter%20is%20a%20free%2C%20open-source%20template%20built%20with%20Next.js%20and%20Shadcn%2Fui%20Registry%20to%20accelerate%20your%20AI-Native%20Design%20System.&demo-url=https%3A%2F%2Fregistry-starter.vercel.app&demo-image=%2F%2Fregistry-starter.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://registry-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Dashboard+Kit&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Fdashboard.json)

This registry application also exposes `Open in v0` buttons for each component. Once this application is deployed, the
`Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this
registry's `/r/${component_name}.json` endpoint. This endpoint will provide v0 the necessary file information, content,
and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Theming

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`globals.css`](./src/app/globals.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

#### Fonts

To use custom fonts, you can either use [
`next/font/google`](https://nextjs.org/docs/pages/getting-started/fonts#google-fonts) or the 
[`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS rule in your 
[`globals.css`](./src/app/globals.css).

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbi49c.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbj49c.woff') format('woff');
}
```

If you use `@font-face`, ensure you modify [`globals.css`](src/app/globals.css) tailwind configuration to map 
your custom font variables to Tailwind fonts. Refer to this
[Tailwind documentation](https://tailwindcss.com/docs/font-family#customizing-your-theme)

## MCP

To use this registry with MCP, you must also edit [`registry.json`](./registry.json)'s first
`registry-item` named `theme`. This `registry:theme` item not only contains the tailwind configuration, but it also
contains your design tokens / CSS variables.

The `shadcn/ui` CLI's MCP command will use the entire `registy.json` file, so it must be put in the `/public` folder
with all of your `registry:item`s. This will enable you to use your registry in tools like Cursor & Windsurf.

## Authentication

To protect your registry, you must first protect your `registry.json` and all `registry:item` JSON files.  
This is made possible with an environment variable and basic Next.js Middleware.

1. Create new `REGISTRY_AUTH_TOKEN`. For example, you can generate one:

    ```bash
    node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
    ```

2. Add new `middleware.ts` file to protect `/r/:path` routes

    ```ts
    // src/middleware.ts
    import { NextResponse } from "next/server";
    import type { NextRequest } from "next/server";
    
    export const config = { matcher: "/r/:path*" };
    
    export function middleware(request: NextRequest) {
      const token = request.nextUrl.searchParams.get("token");
    
      if (token == null || token !== process.env.REGISTRY_AUTH_TOKEN) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
    
      return NextResponse.next();
    }
    
    ```

When using `Open in v0`, the v0 platform will use the `token` search parameter to authenticate with your Registry:

```ts
const v0Url = `https://v0.dev/chat/api/open?url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Faccordion.json&token=${process.env.REGISTRY_AUTH_TOKEN}`
```

> [!NOTE]  
> This method only protects the `/r/:path` routes, this does NOT protect the Registry's UI / component previews. If you
> choose to protect the UI / component preview, you must ensure the `registry.json` and all `registry:item`s are 
> publicly accessible or protected using the `token` search parameter. This ensures v0 and other AI Tools have access to
> use the registry
    

## Running locally

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/layouts` contains all v0 layouts used in `registry.json`