"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Users,
  Globe,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

const coreValuesData = [
  {
    title: "#421–430",
    subtitle: "QS Asia 2025 Rankings",
    description:
      "Đứng trong TOP 430 trường đại học tốt nhất châu Á theo bảng xếp hạng QS Asia 2025, khẳng định vị thế và chất lượng giáo dục của HCMUTE trên bản đồ giáo dục khu vực.",
    icon: Globe,
    color: "text-gray-400",
  },
  {
    title: "Công nghệ 4.0",
    subtitle: "Trung tâm đào tạo xuất sắc",
    description:
      "Trung tâm đào tạo xuất sắc và tài năng về công nghệ 4.0, tiên phong trong việc ứng dụng và phát triển các công nghệ tiên tiến phục vụ cho sự phát triển của xã hội.",
    icon: Lightbulb,
    color: "text-gray-400",
  },
  {
    title: "Năng lượng tái tạo",
    subtitle: "Hydrogen & Green Energy",
    description:
      "Trung tâm đào tạo xuất sắc và tài năng về công nghệ năng lượng tái tạo và năng lượng hydrogen, đóng góp vào mục tiêu phát triển bền vững của đất nước.",
    icon: Users,
    color: "text-gray-400",
  },
  {
    title: "TOP 50",
    subtitle: "Thương hiệu TP.HCM",
    description:
      "TOP 50 đơn vị tiêu biểu có thương hiệu và sản phẩm chủ lực của TP.HCM, được công nhận bởi chính quyền thành phố về những đóng góp xuất sắc cho sự phát triển địa phương.",
    icon: Lightbulb,
    color: "text-gray-400",
  },
];

export default function CoreValues() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto slide functionality - pauses when user is interacting
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coreValuesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  // Resume auto-play after user stops interacting
  useEffect(() => {
    if (isUserInteracting) {
      const timer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isUserInteracting]);

  const nextSlide = () => {
    setIsUserInteracting(true);
    setCurrentSlide((prev) => (prev + 1) % coreValuesData.length);
  };

  const prevSlide = () => {
    setIsUserInteracting(true);
    setCurrentSlide(
      (prev) => (prev - 1 + coreValuesData.length) % coreValuesData.length
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Fixed Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
              TRIẾT LÝ
              <AuroraText
                className="px-2"
                colors={["#0c4ebfff", "#1760dfff", "#ae0303ff"]}
              >
                GIÁO DỤC
              </AuroraText>
            </h2>
            <p className="text-6xl flex gap-2 font-bold text-black-900 leading-relaxed">
              <div>
                <span style={{ color: "#1760dfff" }}>NHÂN BẢN</span>
                <br />
                <span style={{ color: "#1760dfd3" }}>SÁNG TẠO</span>
                <br />
                <span style={{ color: "#1760dfb3" }}>HỘI NHẬP</span>
              </div>
            </p>
          </motion.div>

          {/* Right Side - Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card Container - Wider to show 2 full cards */}
            <div
              className="relative overflow-hidden w-4xl"
              onMouseEnter={() => setIsUserInteracting(true)}
              onMouseLeave={() => setIsUserInteracting(false)}
            >
              <motion.div
                className="flex gap-6 py-4"
                animate={{ x: -currentSlide * 420 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Duplicate cards for infinity scroll */}
                {[...coreValuesData, ...coreValuesData].map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-8 border-border border-1 transition-shadow duration-300 relative group min-h-[400px] w-[400px] flex-shrink-0"
                      whileHover={{ y: -5 }}
                    >
                      {/* Icon in bottom right */}
                      <div className="absolute bottom-4 right-4 opacity-10 overflow-hidden">
                        <IconComponent className={`w-24 h-24 ${value.color}`} />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-4">
                          {value.subtitle}
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

