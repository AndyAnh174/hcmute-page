"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Users, BookOpen, Microscope, Rocket, Award } from "lucide-react";
import { GridPatternDashed } from "@/components/ui/grid-pattern-dashed";

// Separate component for each content item to fix Rules of Hooks
function ContentItem({
  content,
  index,
  contentIndex,
  smoothProgress,
  totalItems,
}: {
  content: ScrollContent;
  index: number;
  contentIndex: any;
  smoothProgress: any;
  totalItems: number;
}) {
  // Calculate opacity based on scroll position - smoother transition
  const opacity = useTransform(
    contentIndex,
    (value: number) => {
      const distance = Math.abs(value - index);
      const isFirst = index === 0;
      const isLast = index === totalItems - 1;
      
      // First and last items stay visible much longer
      const fadeStart = (isFirst || isLast) ? 0.2 : 0.3;
      const fadeEnd = (isFirst || isLast) ? 0.6 : 0.8;
      
      if (distance < fadeStart) return 1;
      if (distance < fadeEnd) return 1 - (distance - fadeStart) * (1 / (fadeEnd - fadeStart));
      return 0;
    }
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity,
      }}
    >
      <div className="p-6 lg:p-8 bg-white border border-gray-200 shadow-sm">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 ${content.color} text-white mb-6`}>
          {content.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
          {content.title}
        </h3>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {content.description}
        </p>

      </div>
    </motion.div>
  );
}

interface ScrollContent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

const scrollContents: ScrollContent[] = [
  {
    id: "khoa-hoc",
    title: "Khoa Học & Công Nghệ",
    description:
      "HCMUTE là trung tâm nghiên cứu và phát triển công nghệ hàng đầu, với các phòng thí nghiệm hiện đại và đội ngũ nghiên cứu viên xuất sắc. Chúng tôi tập trung vào các lĩnh vực công nghệ tiên tiến như AI, IoT, Robotics và Năng lượng tái tạo.",
    icon: <Microscope className="w-8 h-8" />,
    image: "/news/hoi-thao-ute.jpg",
    color: "bg-blue-600",
  },
  {
    id: "tuyen-sinh",
    title: "Tuyển Sinh",
    description:
      "HCMUTE tuyển sinh đa dạng các ngành đào tạo từ bậc đại học đến sau đại học. Với chương trình đào tạo chất lượng cao, cơ sở vật chất hiện đại và đội ngũ giảng viên giàu kinh nghiệm, chúng tôi cam kết mang đến môi trường học tập tốt nhất cho sinh viên.",
    icon: <Users className="w-8 h-8" />,
    image: "/news/giai-nha-robot.jpeg",
    color: "bg-slate-700",
  },
  {
    id: "dao-tao",
    title: "Đào Tạo",
    description:
      "Chương trình đào tạo của HCMUTE được thiết kế theo chuẩn quốc tế, kết hợp giữa lý thuyết và thực hành. Sinh viên được trang bị đầy đủ kiến thức chuyên môn, kỹ năng thực hành và tư duy sáng tạo để sẵn sàng cho thị trường lao động.",
    icon: <BookOpen className="w-8 h-8" />,
    image: "/news/hoi-thao-ute.jpg",
    color: "bg-gray-800",
  },
  {
    id: "nghien-cuu",
    title: "Nghiên Cứu",
    description:
      "HCMUTE có nhiều đề tài nghiên cứu khoa học cấp quốc gia và quốc tế, hợp tác với các trường đại học và tổ chức nghiên cứu hàng đầu thế giới. Các công trình nghiên cứu của chúng tôi đóng góp tích cực vào sự phát triển khoa học công nghệ của đất nước.",
    icon: <Rocket className="w-8 h-8" />,
    image: "/news/giai-nha-robot.jpeg",
    color: "bg-indigo-600",
  },
  {
    id: "thanh-tich",
    title: "Thành Tích",
    description:
      "Với bề dày lịch sử hơn 50 năm, HCMUTE đã đạt được nhiều thành tựu đáng tự hào. Sinh viên và giảng viên của trường đã giành được nhiều giải thưởng trong các cuộc thi quốc gia và quốc tế, khẳng định chất lượng đào tạo và nghiên cứu của nhà trường.",
    icon: <Award className="w-8 h-8" />,
    image: "/news/hoi-thao-ute.jpg",
    color: "bg-gray-900",
  },
];

export default function ScrollSyncSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress - smoother
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 35,
    restDelta: 0.001,
  });

  // Calculate content index based on scroll progress
  // First and last items take more scroll space
  const contentIndex = useTransform(
    smoothProgress,
    (value: number) => {
      const totalItems = scrollContents.length;
      const lastIndex = totalItems - 1;
      
      // First 40% of scroll = item 0 (Khoa Học & Công Nghệ)
      if (value < 0.4) {
        return value / 0.4 * 0.5; // Map 0-0.4 to 0-0.5
      }
      // Last 40% of scroll = last item (Thành tích)
      if (value > 0.6) {
        const lastProgress = (value - 0.6) / 0.4;
        return lastIndex - 0.5 + lastProgress * 0.5; // Map 0.6-1.0 to (lastIndex-0.5) to lastIndex
      }
      // Middle 20% for other items
      const middleProgress = (value - 0.4) / 0.2;
      return 0.5 + middleProgress * (lastIndex - 1);
    }
  );

  // Fade effect when scrolling into/out of section
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="relative min-h-[400vh] lg:min-h-[500vh] py-20 lg:py-32">
      <motion.div 
        className="sticky top-0 h-screen flex items-center overflow-hidden relative"
        style={{ opacity: sectionOpacity }}
      >
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <GridPatternDashed />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Scroll Indicator & Content */}
            <div className="flex gap-6 lg:gap-8">
              {/* Scroll Indicator */}
              <div className="relative w-1 h-[600px] bg-gray-200">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gray-900"
                  style={{
                    height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                  }}
                />
              </div>

              {/* Scrolling Content */}
              <div className="relative flex-1 h-[600px]">
                {scrollContents.map((content, index) => (
                  <ContentItem
                    key={content.id}
                    content={content}
                    index={index}
                    contentIndex={contentIndex}
                    smoothProgress={smoothProgress}
                    totalItems={scrollContents.length}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Sticky Image */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden border border-gray-200 bg-gray-50">
              {scrollContents.map((content, index) => {
                const imageOpacity = useTransform(
                  contentIndex,
                  (value: number) => {
                    const distance = Math.abs(value - index);
                    const totalItems = scrollContents.length;
                    const isFirst = index === 0;
                    const isLast = index === totalItems - 1;
                    
                    // First and last items stay visible much longer
                    const fadeStart = (isFirst || isLast) ? 0.2 : 0.3;
                    const fadeEnd = (isFirst || isLast) ? 0.6 : 0.8;
                    
                    if (distance < fadeStart) return 1;
                    if (distance < fadeEnd) return 1 - (distance - fadeStart) * (1 / (fadeEnd - fadeStart));
                    return 0;
                  }
                );

                return (
                  <motion.div
                    key={content.id}
                    className="absolute inset-0"
                    style={{ opacity: imageOpacity }}
                  >
                    <Image
                      src={content.image}
                      alt={content.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

