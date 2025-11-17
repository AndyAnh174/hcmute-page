"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArrowButton from "../block/chevrons/arrow-button";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Trường Đại học Sư phạm Kỹ thuật TP.HCM",
    subtitle: "Tiên phong trong giáo dục kỹ thuật",
    description:
      "Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực kỹ thuật và công nghệ, đáp ứng nhu cầu phát triển của đất nước.",
    image: "/carousel/1.jpg",
    cta: "Tìm hiểu thêm",
    ctaLink: "/gioi-thieu",
  },
  {
    id: 2,
    title: "Nghiên cứu Khoa học",
    subtitle: "Đổi mới sáng tạo",
    description:
      "Phát triển các dự án nghiên cứu ứng dụng, chuyển giao công nghệ và hợp tác với doanh nghiệp để tạo ra giá trị thực tiễn.",
    image: "/carousel/2.jpg",
    cta: "Khám phá nghiên cứu",
    ctaLink: "/nghien-cuu",
  },
  {
    id: 3,
    title: "Hợp tác Quốc tế",
    subtitle: "Kết nối toàn cầu",
    description:
      "Liên kết với các trường đại học hàng đầu thế giới, tạo cơ hội học tập và nghiên cứu quốc tế cho sinh viên và giảng viên.",
    image: "/carousel/3.jpg",
    cta: "Xem chương trình",
    ctaLink: "/hop-tac",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl px-32 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 bg-blue-600/90 text-white rounded-full text-sm font-medium mb-6">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-5xl text-nowrap font-bold text-white mb-6 leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  //   initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="!text-white rounded-3xl backdrop-blur-md bg-white/20 text-white px-8 py-4 hover:bg-white/30 border-white/30 hover:border-white/50 transition-all duration-300"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <ArrowButton
        direction="left"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20"
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      />

      <ArrowButton
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20"
        direction="right"
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Slide Counter */}
      {/* <div className="absolute top-8 right-8 z-20 text-white/80 text-sm font-medium">
        {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div> */}
    </div>
  );
}
