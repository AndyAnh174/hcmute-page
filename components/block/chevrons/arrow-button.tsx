import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const ArrowButton = ({
  direction,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  direction: "left" | "right";
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`border border-white/20 cursor-pointer select-none bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 ${className}`}
    >
      {direction === "right" ? (
        <ChevronRight className="w-6 h-6 pointer-events-none" />
      ) : (
        <ChevronLeft className="w-6 h-6 pointer-events-none" />
      )}
    </button>
  );
};

export default ArrowButton;
