import React, { useState, useEffect } from "react";
// Mantine Providers
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { getSupabaseClient } from "./supabase/getSupabaseClient";
// Router imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Generated Routetree
import { routeTree } from "./routeTree.gen";
import Spinner from "./components/Spinner";

export const router = createRouter({
  routeTree,
  context: {
    supabase: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay (you can replace this with real data loading logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (e.g., data fetching)
    }, 1200); // 1.2 seconds for demo

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {loading ? (
        <Spinner /> // Show the spinner while loading
      ) : (
        <MantineProvider>
          <ModalsProvider>
            <RouterProvider
              router={router}
              context={{ supabase: getSupabaseClient() }}
            />
          </ModalsProvider>
        </MantineProvider>
      )}
    </>
  );
}
