import React from "react";
// Mantine Providers
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { getSupabaseClient } from "./supabase/getSupabaseClient";
// Router imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
import ScrollToHash from "./components/scrollToHash";
// Generated Routetree
import { routeTree } from "./routeTree.gen";
import "../src/style.css";

export const router = createRouter({
  routeTree,
  context: {
    supabase: undefined!,
  },
  basepath: "/devedbyaiden",   // ✅ Add this
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <MantineProvider>
      <ModalsProvider>
      {/* <ScrollToHash /> */}
        <RouterProvider
          router={router}
          context={{ supabase: getSupabaseClient() }}
        />
      </ModalsProvider>
    </MantineProvider>
  );
}
