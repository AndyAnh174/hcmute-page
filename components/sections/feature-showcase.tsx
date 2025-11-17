"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";
import { Separator } from "../ui/separator";

// Đăng ký ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Dữ liệu các mục tính năng
const featureData = [
  {
    id: "dao-tao",
    title: "Chương trình",
    titleHighlight: "Đào tạo",
    description:
      "52 ngành Đại học, 18 ngành Thạc sĩ, 12 ngành Tiến sĩ. Chương trình đào tạo của HCMUTE được thiết kế theo chuẩn quốc tế, kết hợp giữa lý thuyết và thực hành. Sinh viên được trang bị đầy đủ kiến thức chuyên môn, kỹ năng thực tế và tư duy sáng tạo, cam kết đào tạo nguồn nhân lực chất lượng cao.",
    imageUrl: "/scroll/dao-tao.jpg",
    tabLabel: "52 ngành Đại học , 18 ngành Thạc sĩ, 12 ngành Tiến sĩ",
    tabColor: "from-[#0c4ebf] to-[#1760df]",
  },
  {
    id: "tuyen-sinh",
    title: "",
    titleHighlight: "Tuyển sinh",
    description:
      "HCMUTE tuyển sinh đa dạng các ngành đào tạo từ bậc đại học đến sau đại học. Với phương thức tuyển sinh linh hoạt, minh bạch và công bằng, chúng tôi tạo cơ hội cho mọi học sinh có năng lực và đam mê được theo đuổi ước mơ học tập. Hệ thống tư vấn tuyển sinh chuyên nghiệp luôn sẵn sàng hỗ trợ thí sinh và phụ huynh.",
    imageUrl: "/scroll/tuyen-sinh.jpeg",
    tabLabel: "Khóa 2025",
    tabColor: "from-[#1760df] to-[#0c4ebf]",
  },
  {
    id: "khcn",
    title: "Nghiên cứu",
    titleHighlight: "Khoa học",
    description:
      "Tạp chí Khoa học Giáo dục JTE uy tín hàng đầu Việt Nam. HCMUTE tiên phong trong việc ứng dụng và phát triển các công nghệ tiên tiến. Với các phòng thí nghiệm hiện đại, đội ngũ giảng viên giàu kinh nghiệm và các dự án nghiên cứu đột phá, chúng tôi đóng góp tích cực vào sự phát triển khoa học công nghệ của đất nước.",
    imageUrl: "/carousel/1.jpg",
    tabLabel: "Tạp chí Khoa học Giáo dục JTE uy tín hàng đầu Việt Nam",
    tabColor: "from-[#0c4ebf] to-[#1760df]",
  },
  {
    id: "hoat-dong-sv",
    title: "Phục vụ",
    titleHighlight: "Cộng đồng",
    description:
      "Hướng đến phát triển bền vững. HCMUTE tạo môi trường phát triển toàn diện cho sinh viên thông qua các hoạt động ngoại khóa phong phú. Từ các câu lạc bộ học thuật, thể thao, văn hóa nghệ thuật đến các chương trình tình nguyện, giao lưu quốc tế, sinh viên có nhiều cơ hội để phát triển kỹ năng mềm, mở rộng mạng lưới quan hệ.",
    imageUrl: "/carousel/3.jpg",
    tabLabel: "Hướng đến phát triển bền vững",
    tabColor: "from-[#ae0303] to-[#1760df]",
  },
];

export default function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Preload tất cả hình ảnh để đảm bảo instant switch
  useEffect(() => {
    if (typeof window === "undefined") return;

    featureData.forEach((feature) => {
      const img = new window.Image();
      img.src = feature.imageUrl;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    let triggers: ScrollTrigger[] = [];

    // Tạo ScrollTrigger cho mỗi section - scroll trên window
    triggers = featureData
      .map((feature, index) => {
        const section = sectionsRef.current[index];
        if (!section) return null;

        return ScrollTrigger.create({
          trigger: section,
          start: "top 60%", // Start earlier - when section is 60% from top
          end: "bottom 40%", // End earlier - when section is 40% from top
          onEnter: () => {
            setCurrentImageIndex(index);
          },
          onEnterBack: () => {
            setCurrentImageIndex(index);
          },
          // markers: true, // Uncomment để debug
        });
      })
      .filter((trigger): trigger is ScrollTrigger => trigger !== null);

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup khi component unmount
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative px-32 w-full bg-white py-10">
      <div ref={containerRef} className="max-w-[1920px]">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Cột Phải - Image Display */}
          <div className="lg:col-span-6 relative">
            {/* Sticky Image */}

            <div ref={imageRef} className="sticky top-32 h-[56vh] w-full">
              <div className="flex px-8 justify-start mb-4 lg:mb-0">
                <div
                  className={`rounded-t-lg px-4 py-2.5 font-semibold bg-gradient-to-r ${featureData[currentImageIndex].tabColor} text-white shadow-lg transform transition-all duration-300 ease-in-out`}
                >
                  {featureData[currentImageIndex].tabLabel}
                </div>
              </div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/10 z-[2]" />

                <Image
                  key={featureData[currentImageIndex].id}
                  src={featureData[currentImageIndex].imageUrl}
                  alt={`${featureData[currentImageIndex].title} ${featureData[currentImageIndex].titleHighlight}`}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Cột Giữa - Text Content - Scrolls Normally */}
          <div className="lg:col-span-5 pb-[32vh]">
            {featureData.map((feature, index) => (
              <>
                <div
                  key={feature.id}
                  ref={(el) => {
                    sectionsRef.current[index] = el;
                  }}
                  className={`${"h-[24vh]"} flex flex-col justify-center py-8`}
                >
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-opacity duration-200 ease-out"
                    style={{
                      opacity: currentImageIndex === index ? 1 : 0.4,
                    }}
                  >
                    {feature.title}{" "}
                    <AuroraText
                      className="inline-block"
                      colors={["#0c4ebfff", "#1760dfff", "#ae0303ff"]}
                    >
                      {feature.titleHighlight}
                    </AuroraText>
                  </h2>
                  <p
                    className="text-base md:text-lg text-gray-700 leading-relaxed transition-opacity duration-200 ease-out"
                    style={{
                      opacity: currentImageIndex === index ? 1 : 0.25,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
                {index < featureData.length - 1 && (
                  <div className="h-[24vh] flex items-center justify-center">
                    <Separator className="w-full " />
                  </div>
                )}
              </>
            ))}
          </div>
          {/* Progress Indicator - Fixed on Left Side */}
          <div className="hidden flex lg:block">
            <div className="sticky top-32 h-[56vh] flex items-end flex-col gap-2">
              {featureData.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 w-1 rounded-full transition-all duration-300 ease-in-out ${
                    index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
