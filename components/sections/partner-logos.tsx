"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { Globe } from "../ui/globe";

const universityLogos = [
  "/linked-university/Untitled-1-01.png",
  "/linked-university/Untitled-1-02.png",
  "/linked-university/Untitled-1-03.png",
  "/linked-university/Untitled-1-04.png",
  "/linked-university/Untitled-1-05.png",
  "/linked-university/Untitled-1-06.png",
  "/linked-university/Untitled-1-07.png",
];

const companyLogos = [
  "/linked-company/Untitled-1-08.png",
  "/linked-company/Untitled-1-09.png",
  "/linked-company/Untitled-1-10.png",
  "/linked-company/Untitled-1-11.png",
  "/linked-company/Untitled-1-12.png",
  "/linked-company/Untitled-1-13.png",
  "/linked-company/Untitled-1-14.png",
  "/linked-company/Untitled-1-15.png",
  "/linked-company/Untitled-1-16.png",
  "/linked-company/Untitled-1-17.png",
];

export default function PartnerLogos() {
  return (
    <section className="py-20 bg-white overflow-hidden  relative">
      <div className=" max-w-xl size-full opacity-[.4] absolute top-0 left-[-10rem]">
        <Globe className="right-0 " />
      </div>
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            ĐỐI TÁC CHIẾN LƯỢC
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hợp tác với các trường đại học và doanh nghiệp hàng đầu để mang lại
            cơ hội học tập và phát triển tốt nhất cho sinh viên
          </p>
        </motion.div>

        {/* University Logos Row - Right to Left */}
        <div className="relative mb-8 z-[99]">
          <Marquee reverse className="[--duration:40s]">
            {universityLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                className="h-16 w-28 object-contain"
                alt={`University partner ${idx + 1}`}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-gray-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-gray-50"></div>
        </div>
        {/* Company Logos Row - Left to Right */}
        <div className="relative">
          <Marquee className="[--duration:40s]">
            {companyLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                className="h-16 w-28 object-contain"
                alt={`Company partner ${idx + 1}`}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-gray-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-gray-50"></div>
        </div>
      </div>
    </section>
  );
}
