import Header from "@/components/block/header";
import Footer from "@/components/block/footer";
import HeaderSpacer from "@/components/ui/header-spacer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { newsItems, formatDate } from "@/lib/news-data";

export default function NewsPage() {
  const featuredNews = newsItems[0];
  const newsList = newsItems.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50">
      <Header />
      <HeaderSpacer />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900">
            Tin Tức & Sự Kiện
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về hoạt động đào tạo, nghiên cứu khoa học và đời sống sinh viên tại HCMUTE.
          </p>
        </div>

        {/* Featured News Hero */}
        <section className="mb-16">
          <Link
            href={`/tin-tuc/${featuredNews.id}`}
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:shadow-2xl ring-1 ring-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-4 py-1.5 text-sm font-semibold shadow-lg">
                    {featuredNews.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                <div className="flex items-center text-sm text-gray-500 gap-6 mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />{" "}
                    {formatDate(featuredNews.date)}
                  </span>
                  {featuredNews.views && (
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-500" />{" "}
                      {featuredNews.views}
                    </span>
                  )}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 text-lg line-clamp-3 mb-8 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Đọc tiếp <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Filter Tabs (Visual Only for now) */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          {[
            "Tất cả",
            "Sự kiện",
            "Thành tích",
            "Khởi nghiệp",
            "Hợp tác",
            "Hoạt động",
          ].map((tag, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "secondary"}
              className={`rounded-full px-6 ${
                i === 0
                  ? "bg-blue-900 hover:bg-blue-800"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsList.map((news) => (
            <Link
              key={news.id}
              href={`/tin-tuc/${news.id}`}
              className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-gray-100"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/95 backdrop-blur shadow-sm text-gray-900 font-bold hover:bg-white"
                  >
                    {news.category}
                  </Badge>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-xs font-medium text-gray-500 mb-3 gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />{" "}
                    {formatDate(news.date)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-600 mt-auto">
                  Xem chi tiết{" "}
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="rounded-full px-8">
            Xem thêm tin cũ hơn
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
