"use client";

import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function VideoIntroduction() {
  return (
    <section className="pb-2 bg-white relative h-auto">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-start font-bold text-gray-900 mb-4">
            KHÁM PHÁ
            <AuroraText
              className="px-2"
              colors={["#0c4ebfff", "#1760dfff", "#ae0303ff"]}
            >
              HCMUTE
            </AuroraText>
          </h2>
          <p className="text-lg text-gray-600 text-start mx-auto">
            Hành trình 63 năm xây dựng và phát triển của Trường Đại học Sư phạm
            Kỹ thuật TP.HCM
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - YouTube Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sQH0-tBvyY4"
                  title="HCMUTE Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="text-gray-900"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Trường Đại học Sư phạm Kỹ thuật TP.HCM
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Với hơn 63 năm hình thành và phát triển, HCMUTE đã khẳng định
                  vị thế là một trong những trường đại học kỹ thuật hàng đầu
                  Việt Nam, đào tạo nguồn nhân lực chất lượng cao cho các ngành
                  kỹ thuật và công nghệ.
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="rounded-3xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors">
                  Tuyển sinh 2025
                </button>
                <button className="rounded-3xl bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 font-medium transition-colors">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

