"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Users, BookOpen, Microscope, Rocket, Award } from "lucide-react";

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
  // Calculate opacity based on scroll position
  const opacity = useTransform(
    contentIndex,
    (value: number) => {
      const distance = Math.abs(value - index);
      return Math.max(0, 1 - distance * 2.5);
    }
  );

  // Calculate vertical position
  const y = useTransform(
    contentIndex,
    (value: number) => {
      const offset = (value - index) * 60;
      return offset;
    }
  );

  // Calculate scale for active content
  const scale = useTransform(
    contentIndex,
    (value: number) => {
      const distance = Math.abs(value - index);
      return 1 - distance * 0.1;
    }
  );

  // Progress for current section
  const sectionProgress = useTransform(
    smoothProgress,
    [
      index / totalItems,
      (index + 1) / totalItems,
    ],
    [0, 1]
  );

  // Border color based on opacity
  const borderColor = useTransform(
    opacity,
    [0, 1],
    ["rgb(229, 231, 235)", "rgb(17, 24, 39)"]
  );

  // Box shadow based on opacity
  const boxShadow = useTransform(
    opacity,
    [0, 1],
    ["0 1px 2px 0 rgb(0 0 0 / 0.05)", "0 4px 6px -1px rgb(0 0 0 / 0.1)"]
  );

  // Progress bar width
  const progressWidth = useTransform(sectionProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity,
        y,
        scale,
      }}
    >
      <motion.div
        className="p-6 lg:p-8 bg-white border border-gray-200 shadow-sm transition-all duration-300"
        style={{
          borderColor: borderColor,
          boxShadow: boxShadow,
        }}
      >
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-14 h-14 ${content.color} text-white mb-6`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {content.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
          {content.title}
        </h3>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {content.description}
        </p>

        {/* Progress Indicator */}
        <div className="mt-8 h-0.5 bg-gray-100 overflow-hidden">
          <motion.div
            className={`h-full ${content.color}`}
            style={{
              width: progressWidth,
            }}
          />
        </div>
      </motion.div>
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

  // Smooth scroll progress - faster
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate content index based on scroll progress
  const contentIndex = useTransform(
    smoothProgress,
    [0, 1],
    [0, scrollContents.length - 1]
  );

  return (
    <section ref={containerRef} className="relative min-h-[200vh] lg:min-h-[250vh] py-20 lg:py-32">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Sticky Image */}
            <motion.div
              className="relative h-[400px] lg:h-[600px] overflow-hidden border border-gray-200 bg-gray-50"
              style={{
                scale: useTransform(smoothProgress, [0, 1], [1, 0.98]),
              }}
            >
              {scrollContents.map((content, index) => {
                const imageOpacity = useTransform(
                  contentIndex,
                  (value) => {
                    const distance = Math.abs(value - index);
                    return Math.max(0, 1 - distance * 1.5);
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
            </motion.div>

            {/* Right Side - Scrolling Content */}
            <div className="relative h-[600px]">
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
        </div>
      </div>
    </section>
  );
}

