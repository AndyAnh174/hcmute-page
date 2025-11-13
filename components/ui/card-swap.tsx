"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface CardSwapItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  href?: string;
}

interface CardSwapProps {
  items: CardSwapItem[];
  className?: string;
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

export function CardSwap({ 
  items, 
  className = "", 
  autoRotate = false, 
  autoRotateInterval = 10000 
}: CardSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".card-swap-item");
    
    cards.forEach((card, index) => {
      if (index === activeIndex) {
        gsap.to(card, {
          zIndex: items.length,
          scale: 1,
          y: 0,
          rotation: 0,
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        const offset = index - activeIndex;
        const absOffset = Math.abs(offset);
        const isBefore = offset < 0;
        
        gsap.to(card, {
          zIndex: items.length - absOffset,
          scale: 1 - absOffset * 0.06,
          y: isBefore ? -absOffset * 25 : absOffset * 25,
          x: isBefore ? -absOffset * 15 : absOffset * 15,
          rotation: isBefore ? -absOffset * 3 : absOffset * 3,
          opacity: absOffset > 2 ? 0.4 : 1 - absOffset * 0.2,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });
  }, [activeIndex, items.length]);

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate || items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, items.length]);

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div ref={containerRef} className={`relative h-[520px] ${className}`}>
      {items.map((item, index) => {
        const offset = index - activeIndex;
        const absOffset = Math.abs(offset);
        const isBefore = offset < 0;
        
        const CardContent = (
          <div
            className="card-swap-item absolute inset-0 cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl"
            onClick={() => handleCardClick(index)}
            style={{
              zIndex: items.length - absOffset,
              transform: `translate(${isBefore ? -absOffset * 15 : absOffset * 15}px, ${isBefore ? -absOffset * 25 : absOffset * 25}px) scale(${1 - absOffset * 0.06}) rotate(${isBefore ? -absOffset * 3 : absOffset * 3}deg)`,
              opacity: absOffset > 2 ? 0.4 : 1 - absOffset * 0.2,
            }}
          >
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-800 border border-white/30 shadow-sm">
                      {item.category}
                    </span>
                    <span className="text-xs text-white/90 font-medium bg-black/20 px-2 py-1 rounded">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight line-clamp-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-white/90 leading-relaxed line-clamp-3 mb-4 drop-shadow">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/80 font-medium">
                      {item.readTime} đọc
                    </span>
                    <div className="flex items-center text-white hover:text-blue-200 transition-colors text-sm font-medium">
                      Đọc thêm
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/10 transition-colors duration-300 rounded-3xl"></div>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={item.id} href={item.href} className="block h-full w-full">
            {CardContent}
          </Link>
        ) : (
          <div key={item.id}>{CardContent}</div>
        );
      })}
    </div>
  );
}

