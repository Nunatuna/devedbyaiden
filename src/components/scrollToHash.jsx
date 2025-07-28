import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export default function ScrollToHash() {
  const { location } = useRouterState();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [hash]);

  return null;
}
