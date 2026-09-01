import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="grain flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="label-editorial">TSM · 404</p>
        <h1 className="mt-6 text-3xl leading-tight sm:text-4xl">
          This page is not in the record.
        </h1>
        <div className="mt-10">
          <Link to="/" className="link-quiet">
            Return to the record
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="grain flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="label-editorial">TSM · Error</p>
        <h1 className="mt-6 text-3xl leading-tight sm:text-4xl">This page did not load.</h1>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="link-quiet"
          >
            Try again
          </button>
          <a href="/" className="link-quiet">
            Return to the record
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Spiral Method — A Record of Recurring Patterns" },
      {
        name: "description",
        content: "An independent visual and editorial record of recurring patterns.",
      },
      { property: "og:site_name", content: "The Spiral Method" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://thespiralmethod.life/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "The Spiral Method — a record of recurring patterns",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://thespiralmethod.life/og.jpg" },
      { name: "theme-color", content: "#0D0E10" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=DM+Serif+Display&family=IBM+Plex+Mono:wght@400&family=Inter+Tight:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
