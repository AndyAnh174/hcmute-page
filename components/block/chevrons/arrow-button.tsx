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
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`border-1 border-white/20 cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 ${className}`}
    >
      {direction === "right" ? (
        <ChevronRight className="w-6 h-6" />
      ) : (
        <ChevronLeft className="w-6 h-6" />
      )}
    </button>
  );
};

export default ArrowButton;
