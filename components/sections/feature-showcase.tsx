"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Đăng ký ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Dữ liệu các mục tính năng
const featureData = [
  {
    id: "khcn",
    title: "Khoa học & Công nghệ",
    description:
      "HCMUTE là trung tâm đào tạo xuất sắc về công nghệ 4.0, tiên phong trong việc ứng dụng và phát triển các công nghệ tiên tiến. Với các phòng thí nghiệm hiện đại, đội ngũ giảng viên giàu kinh nghiệm và các dự án nghiên cứu đột phá, chúng tôi đóng góp tích cực vào sự phát triển khoa học công nghệ của đất nước.",
    imageUrl: "/carousel/1.jpg", // Thay đổi đường dẫn hình ảnh thực tế
  },
  {
    id: "tuyen-sinh",
    title: "Tuyển sinh",
    description:
      "HCMUTE tuyển sinh đa dạng các ngành đào tạo từ bậc đại học đến sau đại học. Với phương thức tuyển sinh linh hoạt, minh bạch và công bằng, chúng tôi tạo cơ hội cho mọi học sinh có năng lực và đam mê được theo đuổi ước mơ học tập. Hệ thống tư vấn tuyển sinh chuyên nghiệp luôn sẵn sàng hỗ trợ thí sinh và phụ huynh.",
    imageUrl: "/carousel/2.jpg", // Thay đổi đường dẫn hình ảnh thực tế
  },
  {
    id: "dao-tao",
    title: "Đào tạo",
    description:
      "Chương trình đào tạo của HCMUTE được thiết kế theo chuẩn quốc tế, kết hợp giữa lý thuyết và thực hành. Sinh viên được trang bị đầy đủ kiến thức chuyên môn, kỹ năng thực tế và tư duy sáng tạo. Với phương pháp giảng dạy hiện đại, môi trường học tập năng động và cơ sở vật chất tiên tiến, chúng tôi cam kết đào tạo nguồn nhân lực chất lượng cao.",
    imageUrl: "/carousel/3.jpg", // Thay đổi đường dẫn hình ảnh thực tế
  },
  {
    id: "hoat-dong-sv",
    title: "Hoạt động Sinh viên",
    description:
      "HCMUTE tạo môi trường phát triển toàn diện cho sinh viên thông qua các hoạt động ngoại khóa phong phú. Từ các câu lạc bộ học thuật, thể thao, văn hóa nghệ thuật đến các chương trình tình nguyện, giao lưu quốc tế, sinh viên có nhiều cơ hội để phát triển kỹ năng mềm, mở rộng mạng lưới quan hệ và trải nghiệm cuộc sống đại học đầy ý nghĩa.",
    imageUrl: "/carousel/1.jpg", // Thay đổi đường dẫn hình ảnh thực tế
  },
];

export default function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
    const imageContainer = imageRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!container || !imageContainer || !scrollContainer) return;

    let triggers: ScrollTrigger[] = [];
    let rafId: number | null = null;
    let isSetup = false;

    // Đợi DOM render xong trước khi tạo ScrollTrigger
    const setupScrollTriggers = () => {
      // Nếu đã setup rồi thì không setup lại
      if (isSetup) return;

      // Kiểm tra xem tất cả các section đã được render chưa
      const allSectionsReady = featureData.every(
        (_, index) => sectionsRef.current[index] !== null
      );

      if (!allSectionsReady) {
        // Nếu chưa sẵn sàng, thử lại sau một frame
        rafId = requestAnimationFrame(setupScrollTriggers);
        return;
      }

      // Đánh dấu đã setup
      isSetup = true;

      // Tạo ScrollTrigger cho mỗi section với scroller là scroll container
      triggers = featureData
        .map((feature, index) => {
          const section = sectionsRef.current[index];
          if (!section) return null;

          return ScrollTrigger.create({
            trigger: section,
            scroller: scrollContainer, // Sử dụng scroll container thay vì window
            start: "top center", // Khi section đi vào giữa viewport của scroll container
            end: "bottom center",
            onEnter: () => {
              // Instant switch - không có transition
              setCurrentImageIndex(index);
            },
            onEnterBack: () => {
              // Khi scroll ngược lại
              setCurrentImageIndex(index);
            },
          });
        })
        .filter((trigger): trigger is ScrollTrigger => trigger !== null);

      // Refresh ScrollTrigger sau khi tất cả đã được tạo
      ScrollTrigger.refresh();
    };

    // Bắt đầu setup
    setupScrollTriggers();

    // Cleanup khi component unmount
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Cột Trái - Text Content - Scroll Container */}
          <div className="lg:col-span-4">
            <div
              ref={scrollContainerRef}
              className="feature-scroll-container h-[60vh] lg:h-[80vh] overflow-y-auto overflow-x-hidden"
            >
              <div className="space-y-32 lg:space-y-48 pr-4">
                {featureData.map((feature, index) => (
                  <div
                    key={feature.id}
                    ref={(el) => {
                      sectionsRef.current[index] = el;
                    }}
                    className="min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mb-6 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột Giữa - Visual Display - Sticky và Centered */}
          <div className="lg:col-span-8 relative">
            <div
              ref={imageRef}
              className="sticky mt-100  top-[10vh] -translate-y-1/2 h-[40vh] lg:h-[50vh] w-full max-w-4xl mx-auto"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                {/* Chỉ render hình ảnh hiện tại - đã được preload nên switch sẽ instant */}
                <Image
                  key={featureData[currentImageIndex].id}
                  src={featureData[currentImageIndex].imageUrl}
                  alt={featureData[currentImageIndex].title}
                  fill
                  className="object-cover"
                  priority={currentImageIndex === 0}
                  style={{
                    transition: "none", // Instant switch - không có transition
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

