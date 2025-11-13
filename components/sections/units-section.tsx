"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Unit {
  name: string;
  description: string;
  href: string;
  initials: string;
  logo?: string;
}

interface UnitGroup {
  title: string;
  items: Unit[];
}

const UNIT_GROUPS: UnitGroup[] = [
  {
    title: "Khối khoa",
    items: [
      {
        name: "Khoa Điện - Điện tử",
        description: "Đào tạo kỹ sư điện, điện tử, viễn thông và tự động hóa.",
        href: "/khoa/dien-dien-tu",
        initials: "DEE",
      },
      {
        name: "Khoa Cơ khí Chế tạo",
        description: "Trọng tâm vào cơ khí, chế tạo máy và công nghệ vật liệu.",
        href: "/khoa/co-khi",
        initials: "ME",
      },
      {
        name: "Khoa Công nghệ Thông tin",
        description: "Các ngành CNTT, khoa học dữ liệu, trí tuệ nhân tạo.",
        href: "/khoa/cong-nghe-thong-tin",
        initials: "IT",
      },
      {
        name: "Khoa Kinh tế",
        description: "Quản lý công nghiệp, kinh tế, logistics và quản trị.",
        href: "/khoa/kinh-te",
        initials: "ECO",
      },
      {
        name: "Khoa Xây dựng",
        description: "Kỹ thuật xây dựng, kiến trúc và quy hoạch đô thị.",
        href: "/khoa/xay-dung",
        initials: "CE",
      },
      {
        name: "Khoa Công nghệ Hóa học",
        description: "Công nghệ hóa học, vật liệu và môi trường.",
        href: "/khoa/hoa-hoc",
        initials: "CHE",
      },
    ],
  },
  {
    title: "Phòng ban & Trung tâm",
    items: [
      {
        name: "Phòng Đào tạo",
        description: "Quản lý chương trình đào tạo, lịch học và hồ sơ học vụ.",
        href: "/phong/dao-tao",
        initials: "ACA",
      },
      {
        name: "Phòng Công tác sinh viên",
        description: "Hỗ trợ sinh viên, hoạt động đoàn thể và học bổng.",
        href: "/phong/cong-tac-sinh-vien",
        initials: "SV",
      },
      {
        name: "Trung tâm Thông tin & Truyền thông",
        description: "Truyền thông, quảng bá hình ảnh và hạ tầng số của trường.",
        href: "/trung-tam/thong-tin-truyen-thong",
        initials: "ICT",
      },
      {
        name: "Trung tâm Nghiên cứu & Phát triển",
        description: "Nghiên cứu khoa học, chuyển giao công nghệ và đổi mới sáng tạo.",
        href: "/trung-tam/nghien-cuu",
        initials: "R&D",
      },
      {
        name: "Phòng Hợp tác Quốc tế",
        description: "Quan hệ đối ngoại, trao đổi sinh viên và hợp tác quốc tế.",
        href: "/phong/hop-tac-quoc-te",
        initials: "IO",
      },
      {
        name: "Trung tâm Đào tạo Thường xuyên",
        description: "Đào tạo ngắn hạn, bồi dưỡng chuyên môn và chứng chỉ.",
        href: "/trung-tam/dao-tao-thuong-xuyen",
        initials: "CE",
      },
    ],
  },
];

export default function UnitsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const scrollRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Filter units based on search and selected group
  const filteredGroups = useMemo(() => {
    return UNIT_GROUPS.map((group) => {
      const filteredItems = group.items.filter((item) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGroup = !selectedGroup || group.title === selectedGroup;
        return matchesSearch && matchesGroup;
      });
      return { ...group, items: filteredItems };
    }).filter((group) => group.items.length > 0);
  }, [searchQuery, selectedGroup]);

  const handleScroll = (groupIndex: number, direction: "left" | "right") => {
    const container = scrollRefs.current[groupIndex];
    if (!container) return;

    const cardWidth = 192; // 180px + 12px gap
    const scrollAmount = cardWidth * 2;
    const currentScroll = container.scrollLeft;
    const newPosition =
      direction === "right"
        ? currentScroll + scrollAmount
        : Math.max(0, currentScroll - scrollAmount);

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const canScrollLeft = (groupIndex: number) => {
    const container = scrollRefs.current[groupIndex];
    return container ? container.scrollLeft > 0 : false;
  };

  const canScrollRight = (groupIndex: number) => {
    const container = scrollRefs.current[groupIndex];
    if (!container) return false;
    return (
      container.scrollLeft <
      container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ĐƠN VỊ HCMUTE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm đơn vị..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedGroup(null)}
                className={`px-5 py-3 rounded-xl border transition-all flex items-center gap-2 text-sm font-medium ${
                  selectedGroup === null
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <Filter className="w-4 h-4" />
                Tất cả
              </button>
              <button
                onClick={() => setSelectedGroup("Khối khoa")}
                className={`px-5 py-3 rounded-xl border transition-all flex items-center gap-2 text-sm font-medium ${
                  selectedGroup === "Khối khoa"
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                Khoa
              </button>
              <button
                onClick={() => setSelectedGroup("Phòng ban & Trung tâm")}
                className={`px-5 py-3 rounded-xl border transition-all flex items-center gap-2 text-sm font-medium ${
                  selectedGroup === "Phòng ban & Trung tâm"
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                Phòng ban
              </button>
            </div>
          </div>
        </motion.div>

        {/* Units Groups */}
        <div className="space-y-16">
          {filteredGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* Group Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {group.title}
                </h3>
              </div>

              {/* Scrollable Units List */}
              <div className="relative group/container">
                {/* Left Arrow */}
                <button
                  onClick={() => handleScroll(groupIndex, "left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2.5 shadow-lg border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all opacity-0 group-hover/container:opacity-100"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Units Container */}
                <div
                  ref={(el) => {
                    scrollRefs.current[groupIndex] = el;
                  }}
                  className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {group.items.map((unit, index) => (
                    <Link key={unit.name} href={unit.href}>
                      <motion.div
                        className={`relative w-[180px] h-[140px] rounded-xl border-2 transition-all duration-300 cursor-pointer flex-shrink-0 group/card ${
                          index === 0
                            ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-md"
                            : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
                        }`}
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                          {/* Logo/Initials */}
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover/card:scale-110 ${
                              index === 0 ? "bg-white/80" : "bg-gray-100"
                            }`}
                          >
                            {unit.logo ? (
                              <Image
                                src={unit.logo}
                                alt={unit.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            ) : (
                              <span
                                className={`text-sm font-bold ${
                                  index === 0 ? "text-blue-700" : "text-gray-700"
                                }`}
                              >
                                {unit.initials}
                              </span>
                            )}
                          </div>

                          {/* Name */}
                          <h4
                            className={`text-sm font-bold leading-tight transition-colors break-words ${
                              index === 0
                                ? "text-blue-700"
                                : "text-gray-900 group-hover/card:text-blue-600"
                            }`}
                          >
                            {unit.name}
                          </h4>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => handleScroll(groupIndex, "right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2.5 shadow-lg border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all opacity-0 group-hover/container:opacity-100"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredGroups.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              Không tìm thấy đơn vị nào phù hợp với tìm kiếm của bạn.
            </p>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
