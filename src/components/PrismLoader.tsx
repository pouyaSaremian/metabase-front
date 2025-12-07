"use client";

import { useEffect } from "react";

export const PrismLoader = () => {
  useEffect(() => {
    // Dynamically import Prism.js only on client side
    const loadPrism = async () => {
      const Prism = (await import("prismjs")).default;

      // Import languages you need (add more as needed)
      // Note: plaintext is handled by Prism core, no need to import it
      await import("prismjs/components/prism-bash");
      await import("prismjs/components/prism-json");
      await import("prismjs/components/prism-python");
      await import("prismjs/components/prism-javascript");
      await import("prismjs/components/prism-typescript");
      await import("prismjs/components/prism-sql");
      await import("prismjs/components/prism-markdown");
      await import("prismjs/components/prism-yaml");

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    };

    loadPrism();
  }, []);

  return null;
};
