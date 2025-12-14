"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import ArrowButton from "@/components/block/chevrons/arrow-button";

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
    title: "Khoa Viện",
    items: [
      {
        name: "Khoa Cơ khí Chế tạo máy",
        description: "Trọng tâm vào cơ khí, chế tạo máy và công nghệ vật liệu.",
        href: "/khoa/co-khi-che-tao-may",
        initials: "ME",
      },
      {
        name: "Khoa Điện – Điện tử",
        description: "Đào tạo kỹ sư điện, điện tử, viễn thông và tự động hóa.",
        href: "/khoa/dien-dien-tu",
        initials: "DEE",
      },
      {
        name: "Khoa Cơ khí Động lực",
        description: "Đào tạo kỹ sư cơ khí động lực, ô tô và máy móc.",
        href: "/khoa/co-khi-dong-luc",
        initials: "AE",
      },
      {
        name: "Khoa In & Truyền thông",
        description: "Công nghệ in, truyền thông và thiết kế đồ họa.",
        href: "/khoa/in-truyen-thong",
        initials: "PRT",
      },
      {
        name: "Khoa Công nghệ Thông tin",
        description: "Các ngành CNTT, khoa học dữ liệu, trí tuệ nhân tạo.",
        href: "/khoa/cong-nghe-thong-tin",
        initials: "IT",
      },
      {
        name: "Khoa Xây dựng",
        description: "Kỹ thuật xây dựng, kiến trúc và quy hoạch đô thị.",
        href: "/khoa/xay-dung",
        initials: "CE",
      },
      {
        name: "Khoa Thời trang & Du lịch",
        description: "Thiết kế thời trang, quản trị du lịch và khách sạn.",
        href: "/khoa/thoi-trang-du-lich",
        initials: "FT",
      },
      {
        name: "Khoa Kinh tế",
        description: "Quản lý công nghiệp, kinh tế, logistics và quản trị.",
        href: "/khoa/kinh-te",
        initials: "ECO",
      },
      {
        name: "Khoa Công nghệ Hóa học & Thực phẩm",
        description: "Công nghệ hóa học, thực phẩm, vật liệu và môi trường.",
        href: "/khoa/hoa-hoc-thuc-pham",
        initials: "CHE",
      },
      {
        name: "Khoa Ngoại ngữ",
        description: "Đào tạo ngoại ngữ, giao tiếp quốc tế và văn hóa.",
        href: "/khoa/ngoai-ngu",
        initials: "FL",
      },
      {
        name: "Khoa Khoa học Ứng dụng",
        description: "Toán học, vật lý, hóa học ứng dụng và khoa học cơ bản.",
        href: "/khoa/khoa-hoc-ung-dung",
        initials: "AS",
      },
      {
        name: "Viện Sư phạm Kỹ thuật",
        description: "Đào tạo giáo viên kỹ thuật và nghiên cứu giáo dục.",
        href: "/vien/su-pham-ky-thuat",
        initials: "ITE",
      },
    ],
  },
  {
    title: "Phòng Ban",
    items: [
      {
        name: "Phòng Đào tạo",
        description: "Quản lý chương trình đào tạo, lịch học và hồ sơ học vụ.",
        href: "/phong/dao-tao",
        initials: "DT",
      },
      {
        name: "Phòng Hợp tác và Phát triển Đào tạo",
        description:
          "Hợp tác đào tạo, phát triển chương trình và liên kết giáo dục.",
        href: "/phong/hop-tac-phat-trien-dao-tao",
        initials: "HTDT",
      },
      {
        name: "Phòng Khoa học Công nghệ",
        description: "Quản lý hoạt động nghiên cứu khoa học và công nghệ.",
        href: "/phong/khoa-hoc-cong-nghe",
        initials: "KHCN",
      },
      {
        name: "Phòng Tổ chức Hành chính",
        description: "Quản lý tổ chức, hành chính và nhân sự.",
        href: "/phong/to-chuc-hanh-chinh",
        initials: "TCHC",
      },
      {
        name: "Phòng Kế hoạch Tài chính",
        description: "Quản lý ngân sách, kế hoạch và tài chính của trường.",
        href: "/phong/ke-hoach-tai-chinh",
        initials: "KHTC",
      },
      {
        name: "Phòng Tuyển sinh và Công tác Sinh viên",
        description: "Tuyển sinh, hỗ trợ sinh viên và hoạt động đoàn thể.",
        href: "/phong/tuyen-sinh-cong-tac-sinh-vien",
        initials: "TSCTSV",
      },
      {
        name: "Phòng Khảo thí và Đảm bảo Chất lượng",
        description: "Tổ chức khảo thí và đảm bảo chất lượng đào tạo.",
        href: "/phong/khao-thi-dam-bao-chat-luong",
        initials: "KTDB",
      },
      {
        name: "Phòng Quan hệ Quốc tế",
        description:
          "Quan hệ đối ngoại, trao đổi sinh viên và hợp tác quốc tế.",
        href: "/phong/quan-he-quoc-te",
        initials: "QHQT",
      },
      {
        name: "Phòng Quan hệ Doanh nghiệp",
        description: "Kết nối doanh nghiệp, hợp tác và phát triển.",
        href: "/phong/quan-he-doanh-nghiep",
        initials: "QHDN",
      },
      {
        name: "Phòng Thiết bị – Vật tư",
        description: "Quản lý thiết bị, vật tư và tài sản của trường.",
        href: "/phong/thiet-bi-vat-tu",
        initials: "TBVT",
      },
      {
        name: "Phòng Quản trị Cơ sở Vật chất",
        description: "Quản lý và bảo trì cơ sở vật chất, hạ tầng.",
        href: "/phong/quan-tri-co-so-vat-chat",
        initials: "QTCS",
      },
      {
        name: "Phòng Truyền thông",
        description: "Truyền thông, quảng bá hình ảnh và thông tin.",
        href: "/phong/truyen-thong",
        initials: "TT",
      },
      {
        name: "Phòng Thanh tra – Pháp chế",
        description: "Thanh tra, kiểm tra và đảm bảo pháp chế.",
        href: "/phong/thanh-tra-phap-che",
        initials: "TTPC",
      },
      {
        name: "Ban Quản lý KTX",
        description: "Quản lý ký túc xá và dịch vụ sinh viên.",
        href: "/ban/quan-ly-ktx",
        initials: "QLKTX",
      },
      {
        name: "Thư viện",
        description: "Quản lý tài liệu, sách và không gian học tập.",
        href: "/thu-vien",
        initials: "TV",
      },
      {
        name: "Trạm Y tế",
        description: "Chăm sóc sức khỏe và y tế cho sinh viên, cán bộ.",
        href: "/tram-y-te",
        initials: "YT",
      },
      {
        name: "Ban An ninh Trật tự",
        description: "Đảm bảo an ninh, trật tự và an toàn trong trường.",
        href: "/ban/an-ninh-trat-tu",
        initials: "ANTT",
      },
    ],
  },
  {
    title: "Trung Tâm",
    items: [
      {
        name: "Trung tâm Tin học",
        description: "Đào tạo và hỗ trợ công nghệ thông tin, tin học.",
        href: "/trung-tam/tin-hoc",
        initials: "TH",
      },
      {
        name: "Trung tâm Kỹ thuật Tổng hợp",
        description: "Đào tạo kỹ thuật tổng hợp và thực hành.",
        href: "/trung-tam/ky-thuat-tong-hop",
        initials: "KTT",
      },
      {
        name: "Trung tâm Ngoại ngữ",
        description:
          "Đào tạo ngoại ngữ, chứng chỉ quốc tế và giao lưu văn hóa.",
        href: "/trung-tam/ngoai-ngu",
        initials: "NN",
      },
      {
        name: "Trung tâm Phát triển Ngôn ngữ",
        description: "Phát triển kỹ năng ngôn ngữ và giao tiếp.",
        href: "/trung-tam/phat-trien-ngon-ngu",
        initials: "PTNN",
      },
      {
        name: "Trung tâm Nghiên cứu và Ứng dụng Kỹ thuật Xây dựng",
        description: "Nghiên cứu và ứng dụng kỹ thuật xây dựng.",
        href: "/trung-tam/nghien-cuu-ung-dung-ky-thuat-xay-dung",
        initials: "NCUD",
      },
      {
        name: "Trung tâm Việt – Đức",
        description: "Hợp tác và đào tạo theo mô hình Việt – Đức.",
        href: "/trung-tam/viet-duc",
        initials: "VD",
      },
      {
        name: "Trung tâm Hướng nghiệp và Đào tạo Việt – Nhật",
        description: "Hướng nghiệp và đào tạo theo mô hình Việt – Nhật.",
        href: "/trung-tam/huong-nghiep-viet-nhat",
        initials: "HNVN",
      },
      {
        name: "Trung tâm Kỹ thuật và Công nghệ Môi trường",
        description: "Nghiên cứu và ứng dụng công nghệ môi trường.",
        href: "/trung-tam/ky-thuat-cong-nghe-moi-truong",
        initials: "KTCNMT",
      },
      {
        name: "Trung tâm Đào tạo Ngắn hạn",
        description: "Đào tạo ngắn hạn, bồi dưỡng chuyên môn và chứng chỉ.",
        href: "/trung-tam/dao-tao-ngan-han",
        initials: "DTNH",
      },
      {
        name: "Trung tâm Tư vấn Thiết kế và Chế tạo Thiết bị Công nghiệp",
        description: "Tư vấn, thiết kế và chế tạo thiết bị công nghiệp.",
        href: "/trung-tam/tu-van-thiet-ke-che-tao",
        initials: "TVTK",
      },
      {
        name: "Trung tâm Nghiên cứu và Chuyển giao Công nghệ",
        description:
          "Nghiên cứu khoa học, chuyển giao công nghệ và đổi mới sáng tạo.",
        href: "/trung-tam/nghien-cuu-chuyen-giao-cong-nghe",
        initials: "NCCG",
      },
      {
        name: "Trường Trung học Kỹ thuật Thực hành",
        description: "Đào tạo trung học kỹ thuật thực hành.",
        href: "/truong/trung-hoc-ky-thuat-thuc-hanh",
        initials: "THKT",
      },
      {
        name: "Trung tâm Hàn ngữ Học đường A-UTE",
        description: "Đào tạo tiếng Hàn và văn hóa Hàn Quốc.",
        href: "/trung-tam/han-ngu-a-ute",
        initials: "HN",
      },
      {
        name: "Trung tâm Nghiên cứu Năng lượng Tái tạo",
        description: "Nghiên cứu và phát triển năng lượng tái tạo.",
        href: "/trung-tam/nghien-cuu-nang-luong-tai-tao",
        initials: "NCNL",
      },
      {
        name: "Trung tâm Robot Thông minh",
        description: "Nghiên cứu và phát triển robot thông minh.",
        href: "/trung-tam/robot-thong-minh",
        initials: "RTM",
      },
      {
        name: "Trung tâm Dạy học số",
        description: "Phát triển và ứng dụng công nghệ dạy học số.",
        href: "/trung-tam/day-hoc-so",
        initials: "DHS",
      },
      {
        name: "Trung tâm Sáng tạo Khởi nghiệp và Chuyển giao Công nghệ",
        description: "Hỗ trợ khởi nghiệp, sáng tạo và chuyển giao công nghệ.",
        href: "/trung-tam/sang-tao-khoi-nghiep",
        initials: "STKN",
      },
      {
        name: "Trung tâm Thông tin – Máy tính",
        description: "Quản lý thông tin, máy tính và hệ thống IT.",
        href: "/trung-tam/thong-tin-may-tinh",
        initials: "TTMT",
      },
      {
        name: "Trung tâm Công nghệ Phần mềm",
        description: "Phát triển và ứng dụng công nghệ phần mềm.",
        href: "/trung-tam/cong-nghe-phan-mem",
        initials: "CNPM",
      },
      {
        name: "Trung tâm Giáo dục Thể chất",
        description: "Đào tạo và phát triển thể chất, thể thao.",
        href: "/trung-tam/giao-duc-the-chat",
        initials: "GDTC",
      },
      {
        name: "Trung tâm Giáo dục Quốc phòng và An ninh",
        description: "Đào tạo quốc phòng và an ninh cho sinh viên.",
        href: "/trung-tam/giao-duc-quoc-phong-an-ninh",
        initials: "GDQP",
      },
    ],
  },
  {
    title: "Tổ Chức Đoàn Thể",
    items: [
      {
        name: "Đoàn Thanh niên",
        description:
          "Tổ chức các hoạt động thanh niên, tình nguyện và phong trào.",
        href: "/doan-thanh-nien",
        initials: "YOUTH",
      },
      {
        name: "Hội Sinh viên",
        description:
          "Đại diện quyền lợi sinh viên, tổ chức hoạt động và sự kiện.",
        href: "/hoi-sinh-vien",
        initials: "SVU",
      },
      {
        name: "Công Đoàn",
        description: "Bảo vệ quyền lợi cán bộ, tổ chức hoạt động đoàn thể.",
        href: "/cong-doan",
        initials: "UNION",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  },
};

export default function UnitsSection() {
  const [selectedGroup, setSelectedGroup] = useState<UnitGroup | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const index = Math.round(percentage * (UNIT_GROUPS.length - 1));
    setActiveTab(index);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleDragMove(e.touches[0].clientX);
      }
    };

    const handleUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateScrollState = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateScrollState();
    carouselApi.on("select", updateScrollState);
    carouselApi.on("reInit", updateScrollState);

    return () => {
      carouselApi.off("select", updateScrollState);
      carouselApi.off("reInit", updateScrollState);
    };
  }, [carouselApi]);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="w-full px-32">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-center md:text-4xl  font-bold text-gray-900 mb-4">
              <AuroraText
                className="px-2"
                colors={["#0c4ebfff", "#1760dfff", "#ae0303ff"]}
              >
                ĐƠN VỊ HCMUTE
              </AuroraText>
            </h2>
            {/* Tab Navigation */}
            <div className="flex justify-center mt-8">
              <div
                ref={containerRef}
                className="relative inline-flex items-center gap-0 bg-gray-100 rounded-3xl px-1 py-1 cursor-pointer select-none w-full max-w-3xl"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              >
                {/* Sliding indicator */}
                <motion.div
                  className="absolute bg-white rounded-3xl shadow-md"
                  style={{
                    height: "calc(100% - 8px)",
                    top: "4px",
                    width: `calc((100% - 8px) / ${UNIT_GROUPS.length})`,
                  }}
                  initial={false}
                  animate={{
                    left: `calc(${activeTab} * ((100% - 8px) / ${UNIT_GROUPS.length}) + 4px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />

                {UNIT_GROUPS.map((group, index) => (
                  <button
                    key={group.title}
                    onClick={() => {
                      setActiveTab(index);
                    }}
                    className={`relative z-10 px-4 py-2 text-sm transition-all duration-200 flex items-center justify-center flex-1 whitespace-nowrap ${
                      activeTab === index
                        ? "text-gray-900 font-bold"
                        : "text-gray-600 hover:text-gray-900 font-normal"
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Summary Cards - 4 cards showing counts */}
          {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {UNIT_GROUPS.map((group, index) => (
              <motion.div
                key={group.title}
                id={`group-${index}`}
                variants={itemVariants}
                onClick={() => {
                  setActiveTab(index);
                }}
                className="cursor-pointer group"
              >
                <MagicCard
                  className="h-full p-8 bg-gradient-to-br from-white via-blue-50/30 to-white border-0 shadow-none hover:shadow-none"
                  gradientColor="from-blue-500 via-blue-600 to-blue-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <NumberTicker
                        value={group.items.length}
                        className="text-blue-900 text-5xl font-bold"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Carousel for Items */}
          <div className="mt-8 flex justify-between  relative">
            <div className="flex items-center pr-4">
              <button
                className={`bg-white rounded-full p-3 border border-gray-200 shadow-md transition-all duration-200 flex items-center justify-center ${
                  canScrollPrev
                    ? "hover:bg-gray-100 cursor-pointer"
                    : "opacity-0 cursor-default pointer-events-none"
                }`}
                onClick={() => canScrollPrev && carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <Carousel
              key={activeTab} // Re-render carousel when tab changes
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setCarouselApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {UNIT_GROUPS[activeTab]?.items.map((unit, index) => (
                  <CarouselItem
                    key={unit.name}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <Link href={unit.href}>
                      <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer">
                        {/* Placeholder image - bạn có thể thay bằng hình ảnh thực tế */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white/20">
                              {unit.initials}
                            </span>
                          </div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white  !text-md text-nowrap text-ellipsis font-bold text-lg mb-1 line-clamp-2 group-hover:underline">
                            {unit.name}
                          </h3>
                          <p className="text-white/90 text-sm line-clamp-2">
                            {unit.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex items-center pl-4">
              <button
                className={`bg-white rounded-full p-3 border border-gray-200 shadow-md transition-all duration-200 flex items-center justify-center ${
                  canScrollNext
                    ? "hover:bg-gray-100 cursor-pointer"
                    : "opacity-0 cursor-default pointer-events-none"
                }`}
                onClick={() => canScrollNext && carouselApi?.scrollNext()}
                disabled={!canScrollNext}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedGroup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGroup(null)}
            />
            <motion.div
              className="fixed inset-0 z-[110] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-white/20">
                {/* Header */}
                <div className="px-8 py-6 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-white to-white">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                      {selectedGroup.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedGroup(null)}
                    className="p-2 hover:bg-gray-100/80 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedGroup.items.map((unit) => (
                      <Link
                        key={unit.name}
                        href={unit.href}
                        onClick={() => setSelectedGroup(null)}
                        className="group"
                      >
                        <MagicCard
                          className="h-full p-5 bg-white/80 hover:bg-white transition-all duration-300 border-0 shadow-none hover:shadow-lg"
                          gradientColor="from-blue-500 via-blue-600 to-blue-700"
                        >
                          <div className="flex flex-col h-full">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-sm">
                                  {unit.initials}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 text-base leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                  {unit.name}
                                </h4>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">
                              {unit.description}
                            </p>
                          </div>
                        </MagicCard>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
