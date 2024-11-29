import React from "react";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar"; // Import Navbar

export interface RouterContext {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  return (
    <>
      <Navbar /> {/* Use Navbar component */}
      <Outlet />
    </>
  );
}
