import React from "react";
import "../../src/style.css";
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}
