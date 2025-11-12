"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";

const AGENT_BACKGROUND = "/assets/agent-cta-background.webp";

const leadershipData = [
  {
    name: "TS. Trương Thị Hiền",
    position: "Bí thư Đảng uỷ, Chủ tịch Hội đồng Trường",
    image: "/PGS_TS_THH.png",
    description:
      "Nhà trường xây dựng môi trường học tập thân thiện, năng động, hội nhập và giàu trải nghiệm, giúp các em rèn luyện toàn diện cả tri thức, kỹ năng và bản lĩnh.",
  },
  {
    name: "PGS. TS. Lê Hiếu Giang",
    position: "Phó Bí thư Đảng uỷ, Hiệu trưởng Nhà trường",
    image: "/PGS_TS_LGH.png",
    description:
      "Bằng tinh thần trách nhiệm xã hội cao nhất, Nhà trường cam kết mang đến cho người học và xã hội những giá trị khoa học và nhân bản xứng tầm để HCMUTE luôn là sự lựa chọn của những sinh viên tài năng, có khát vọng học hỏi vươn lên, kiên trì với mục tiêu và hoài bão của mình để làm giàu cho bản thân, gia đình và xã hội.",
  },
];

export default function UniversityLeadership() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leadershipData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + leadershipData.length) % leadershipData.length
    );
  };

  const currentLeader = leadershipData[currentSlide];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LÃNH ĐẠO CỦA
            <AuroraText className="px-2" colors={["#002e7dff", "#ae0303ff"]}>
              HCMUTE
            </AuroraText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Đội ngũ lãnh đạo giàu kinh nghiệm, tận tâm với sự nghiệp giáo dục và
            phát triển nhân tài
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end justify-center pt-16 relative">
        {/* Navigation Arrows - Top Right */}
        <div className="absolute top-0 right-8 z-30 flex space-x-2">
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

        <div className="flex justify-center w-screen bg-blue-600 md:h-90 relative">
          <motion.div
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <Image
              src={AGENT_BACKGROUND}
              alt="Agent Background"
              fill
              className="rotate-[0deg] scale-[1.5]"
            />
          </motion.div>

          {/* Content overlay */}
          <div className="relative rounded-2xl z-10 h-full flex items-center">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-8 pb-12 lg:py-0">
                {/* Left side - Text */}
                <motion.div
                  key={currentSlide}
                  className="text-white ml-24 order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {currentLeader.name}
                  </h3>
                  <p className="text-blue-100 text-lg sm:text-xl font-medium mb-2">
                    {currentLeader.position}
                  </p>

                  <p
                    className="pt-4 text-blue-100 leading-relaxed text-sm sm:text-base"
                    style={{ textAlign: "justify" }}
                  >
                    <Quote className="inline w-6 h-6 mr-2 mb-1 text-blue-200" />
                    {currentLeader.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <motion.div
          key={`image-${currentSlide}`}
          className="hidden absolute right-8 lg:flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={currentLeader.image}
            alt={currentLeader.name}
            width={500}
            height={600}
            className="lg:h-[600px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

