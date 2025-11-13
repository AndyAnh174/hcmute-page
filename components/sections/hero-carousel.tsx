"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

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
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          speed: 1000,
          pauseOnHover: true,
          pauseOnFocus: true,
          resetProgress: true,
          arrows: true,
          pagination: true,
          keyboard: "global",
          cover: true,
          height: "100vh",
          arrowPath:
            "M 12.5 0 L 0 12.5 L 12.5 25 M 0 12.5 L 25 12.5",
        }}
        hasTrack={false}
        className="h-full"
      >
        <SplideTrack className="h-full">
          {slides.map((slide) => (
            <SplideSlide key={slide.id} className="h-full">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <span className="inline-block px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
                          {slide.subtitle}
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                          {slide.title}
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
                          {slide.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            variant={"outline"}
                            size="lg"
                            className="!text-white rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 border-white/30 text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                            asChild
                          >
                            <a href={slide.ctaLink}>
                              {slide.cta}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Progress Bar */}
        <div className="splide__progress absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div className="splide__progress__bar h-full"></div>
        </div>
      </Splide>
    </div>
  );
}
