import { useState, useEffect, useRef } from "react";

export function useHeaderSize() {
  const [headerHeight, setHeaderHeight] = useState(128); // Default fallback height
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Function to measure header height
    const measureHeader = () => {
      // Look for nav element (current header structure)
      const header = document.querySelector("nav") as HTMLElement;
      if (header) {
        headerRef.current = header;
        const height = header.clientHeight;
        if (height > 0) {
          setHeaderHeight(height);
        }
      }
    };

    // Initial measurement
    measureHeader();

    // Set up ResizeObserver to watch for header size changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === headerRef.current) {
          const height = entry.target.clientHeight;
          if (height > 0) {
            setHeaderHeight(height);
          }
        }
      }
    });

    // Function to start observing
    const startObserving = () => {
      const header = document.querySelector("nav") as HTMLElement;
      if (header) {
        headerRef.current = header;
        resizeObserver.observe(header);
        measureHeader();
      }
    };

    // Initial observation
    startObserving();

    // Also listen for scroll events as header might change on scroll
    const handleScroll = () => {
      measureHeader();
    };

    // Listen for window resize
    const handleResize = () => {
      measureHeader();
    };

    // Use MutationObserver to watch for DOM changes in the nav element
    const mutationObserver = new MutationObserver(() => {
      measureHeader();
    });

    const header = document.querySelector("nav");
    if (header) {
      mutationObserver.observe(header, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["class", "style"],
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Re-measure after a short delay to ensure all CSS is applied
    const timeoutId = setTimeout(measureHeader, 100);

    return () => {
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    headerHeight,
    headerRef,
  };
}
