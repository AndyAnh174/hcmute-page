"use client";

import { useEffect, useState } from "react";

export default function HeaderSpacer() {
  const [headerHeight, setHeaderHeight] = useState(73); // Top bar (36px) + Nav (64px) = 100px, nhưng tính cả padding

  useEffect(() => {
    const updateHeight = () => {
      const topBar = document.querySelector('[data-top-bar]');
      const nav = document.querySelector("nav");
      let totalHeight = 0;
      
      if (topBar) {
        totalHeight += topBar.getBoundingClientRect().height;
      }
      if (nav) {
        totalHeight += nav.getBoundingClientRect().height;
      }
      
      if (totalHeight > 0) {
        setHeaderHeight(totalHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{ height: `${headerHeight}px` }}
      className="w-full transition-all duration-700 ease-in-out"
    />
  );
}

