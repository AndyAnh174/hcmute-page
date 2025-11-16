"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, TrendingUp, Hash } from "lucide-react";
import Image from "next/image";
import CardSwap, { Card } from "@/components/ui/card-swap";
import Link from "next/link";
import { newsItems, formatDate } from "@/lib/news-data";

export default function NewsSection() {
  const featured = newsItems[0];
  const spotlight = newsItems.slice(1, 4);

  return (
    <section className="relative overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-1 relative h-[200px] lg:h-[500px] rounded-3xl overflow-hidden mt-20 lg:mt-48">
          <div className="absolute inset-0 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 lg:space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 mx-auto lg:mx-0 w-fit">
                <span className="inline-flex size-2 rounded-full bg-blue-600" />
                Tin tức nổi bật của HCMUTE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-[46px] font-semibold leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-blue-700 via-violet-600 to-red-500 bg-clip-text text-transparent">
                  TIN TỨC &amp; SỰ KIỆN
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                <span className="font-semibold text-gray-800">
                  Cập nhật nổi bật:
                </span>{" "}
                những diễn biến mới nhất về hoạt động đào tạo, nghiên cứu và kết
                nối doanh nghiệp tại Trường Đại học Sư phạm Kỹ thuật TP.HCM.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 lg:p-5 shadow-lg shadow-blue-100/60 text-left">
                  <p className="text-xs font-semibold uppercase text-blue-700">
                    Tổng số bài viết
                  </p>
                  <p className="mt-3 lg:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
                    {newsItems.length.toLocaleString("vi-VN")}+
                  </p>
                  <p className="mt-2 text-xs lg:text-sm text-gray-500">
                    Thư viện tin tức được cập nhật liên tục mỗi tuần.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-600/10 via-purple-100 to-white p-4 lg:p-5 shadow-lg shadow-purple-100/60 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-700">
                    Sự kiện sắp tới
                  </p>
                  <p className="mt-3 lg:mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
                    {
                      newsItems.filter((item) => item.category === "Sự kiện")
                        .length
                    }{" "}
                    sự kiện
                  </p>
                  <p className="mt-2 text-xs lg:text-sm text-gray-500">
                    Tham gia các hội thảo, chương trình kết nối doanh nghiệp và sự
                    kiện sinh viên.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Featured News Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 relative flex items-center justify-center lg:justify-end"
            >
              <div className="scale-[0.85] sm:scale-100 mt-100">
                <CardSwap
                  width="min(600px, 88vw)"
                  height={320}
                  cardDistance={70}
                  verticalDistance={90}
                  delay={7000}
                  className="w-full max-w-[460px] sm:max-w-[320px]"
                >
                  {spotlight.map((item) => (
                    <Card
                      key={item.id}
                      customClass=" !border-gray-300 bg-white/50 overflow-hidden"
                    >
                      <div className="block h-full w-full">
                        <div className="relative h-full w-full">
                          <div className="flex flex-col h-full">
                            <div className="pl-4 pt-4 bg-transparent backdrop-blur-md flex flex-col w-full">
                              <h3 className="text-lg font-bold text-gray-600 leading-tight line-clamp-2 mb-2">
                                {item.title}
                              </h3>
                            </div>

                            <div className="flex-1 relative">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 420px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 pt-12 lg:grid-cols-3 gap-6"
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
