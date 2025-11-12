"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
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

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Hợp tác quốc tế":
      return "bg-blue-100 text-blue-800";
    case "Thành tích sinh viên":
      return "bg-green-100 text-green-800";
    case "Sự kiện":
      return "bg-purple-100 text-purple-800";
    case "Đào tạo":
      return "bg-orange-100 text-orange-800";
    case "Nghiên cứu":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TIN TỨC & SỰ KIỆN
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cập nhật những thông tin mới nhất về hoạt động đào tạo, nghiên cứu
            và hợp tác của trường
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-white/20 text-white w-fit`}
                >
                  {newsItems[0].category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {newsItems[0].title}
                </h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-blue-200">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(newsItems[0].date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {newsItems[0].readTime}
                    </span>
                  </div>
                  <button className="flex items-center text-white hover:text-blue-200 transition-colors font-medium">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[400px]">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {newsItems.slice(1).map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Đọc thêm
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center">
            Xem tất cả tin tức
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

