"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, TrendingUp, Hash } from "lucide-react";
import Image from "next/image";
import { CardSwap } from "@/components/ui/card-swap";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views?: number;
  tags?: string[];
}

const newsItems: NewsItem[] = [
  {
    id: 101,
    title: "HCMUTE ký kết hợp tác với Đại học Tokyo - Nhật Bản",
    excerpt:
      "Chương trình hợp tác sẽ tạo cơ hội trao đổi sinh viên, giảng viên và phát triển các dự án nghiên cứu chung trong lĩnh vực kỹ thuật và công nghệ.",
    date: "2024-01-15",
    category: "Hợp tác quốc tế",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "3 phút",
    views: 245,
    tags: ["hợp-tác", "quốc-tế", "tokyo"],
  },
  {
    id: 102,
    title: "Sinh viên HCMUTE đạt giải Nhất cuộc thi Robotics Việt Nam 2024",
    excerpt:
      "Đội thi của Khoa Cơ khí đã xuất sắc giành giải Nhất với dự án robot tự động phân loại rác thải thông minh.",
    date: "2024-01-12",
    category: "Thành tích sinh viên",
    image: "/news/giai-nha-robot.jpeg",
    readTime: "2 phút",
    views: 189,
    tags: ["robotics", "giải-thưởng", "sinh-viên"],
  },
  {
    id: 103,
    title: "Hội thảo quốc tế về AI và IoT trong giáo dục kỹ thuật",
    excerpt:
      "Sự kiện quy tụ hơn 200 chuyên gia trong nước và quốc tế thảo luận về xu hướng ứng dụng công nghệ trong đào tạo kỹ thuật.",
    date: "2024-01-10",
    category: "Sự kiện",
    image: "/news/hoi-thao-ute.jpg",
    readTime: "4 phút",
    views: 312,
    tags: ["ai", "iot", "giáo-dục"],
  },
  {
    id: 104,
    title:
      "Khởi động chương trình thực tập doanh nghiệp cho sinh viên năm cuối",
    excerpt:
      "Hơn 1000 sinh viên năm cuối sẽ được thực tập tại các doanh nghiệp hàng đầu trong và ngoài nước.",
    date: "2024-01-08",
    category: "Đào tạo",
    image: "/news/Hinh khoi nghiep 11.jpg",
    readTime: "3 phút",
    views: 156,
    tags: ["thực-tập", "doanh-nghiệp", "sinh-viên"],
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default function NewsSection() {
  const featured = newsItems[0];
  const spotlight = newsItems.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] h-[480px] w-[480px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
              <span className="inline-flex size-2 rounded-full bg-blue-600" />
              Tin tức nổi bật của HCMUTE
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight text-gray-900">
              TIN TỨC &amp; SỰ KIỆN
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Cập nhật những diễn biến mới nhất về hoạt động đào tạo, nghiên cứu
              và kết nối doanh nghiệp tại trường Đại học Sư phạm Kỹ thuật TP.HCM.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
                  Tổng số bài viết
                </p>
                <p className="mt-4 text-4xl font-semibold text-gray-900">
                  {newsItems.length.toLocaleString("vi-VN")}+
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Thư viện tin tức được cập nhật liên tục mỗi tuần.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
                  Sự kiện sắp tới
                </p>
                <p className="mt-4 text-2xl font-semibold text-gray-900">
                  {newsItems.filter((item) => item.category === "Sự kiện").length}{" "}
                  sự kiện
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Tham gia các hội thảo, chương trình kết nối doanh nghiệp và sự kiện sinh viên.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:mt-16"
          >
            <CardSwap
              items={spotlight.map((item) => ({
                ...item,
                href: `/tin-tuc/${item.id}`,
              }))}
              className="max-w-lg mx-auto"
              autoRotate={true}
              autoRotateInterval={10000}
            />
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {newsItems.map((item, index) => (
            <Link key={item.id} href={`/tin-tuc/${item.id}`}>
              <motion.article
                className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl cursor-pointer aspect-square"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image Section - Full Card */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Views Indicator - Top Right */}
                  {item.views && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20 z-10">
                      <span className="text-xs font-medium text-white">
                        {item.views}
                      </span>
                      <TrendingUp className="w-3 h-3 text-white/80" />
                    </div>
                  )}

                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-gray-800 border border-white/30 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Content Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    {/* Date */}
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-xs font-medium text-white/80">
                        {formatDate(item.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 mb-2">
                      {item.title}
                    </h3>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30"
                          >
                            <Hash className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-xs text-white/70 font-medium">
                            +{item.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Read Time */}
                    <div className="flex items-center gap-1.5 text-xs text-white/70">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </div>
                  </div>

                  {/* Hover Overlay - Xem chi tiết ở giữa */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2 text-white text-lg font-semibold">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-white/80 text-center max-w-xs px-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
              Kho lưu trữ tin tức
            </p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Khám phá toàn bộ tin tức, sự kiện và thông báo từ HCMUTE.
            </h3>
          </div>
          <button className="inline-flex items-center gap-3 rounded-full border border-blue-300 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:border-blue-400">
            Xem tất cả tin tức
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

