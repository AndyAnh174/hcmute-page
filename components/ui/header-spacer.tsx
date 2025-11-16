"use client";

import { useHeaderSize } from "@/hooks/use-header-size";

export default function HeaderSpacer() {
  const { headerHeight } = useHeaderSize();

  return (
    <div
      style={{ height: `${headerHeight}px` }}
      className="w-full transition-all duration-700 ease-in-out"
    ></div>
  );
}
