"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Globe, X, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  AREA_GROUPS,
  type AreaItem,
  type AreaGroup,
} from "@/components/block/area-data";

const LOGO_SRC = "/logo/square_logo.png";
const DEFAULT_FEATURE_IMAGE = "/news/hoi-thao-ute.jpg";

type DropdownColumn = {
  title: string;
  items: Array<{
    title: string;
    href: string;
    description?: string;
    bold?: boolean;
  }>;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: {
    columns: DropdownColumn[];
  };
};

const NAVIGATION = {
  left: [
    {
      label: "Về HCMUTE",
      href: "/ve-hcmute",
      dropdown: {
        columns: [
          {
            title: "Khám Phá HCMUTE",
            items: [
              {
                title: "Giới thiệu chung",
                href: "/ve-hcmute/gioi-thieu",
                description:
                  "Tổng quan về lịch sử, vai trò và giá trị cốt lõi của Trường Đại học Sư phạm Kỹ thuật TP.HCM.",
              },
              {
                title: "Tầm nhìn & Sứ mệnh",
                href: "/ve-hcmute/tam-nhin-su-menh",
                description:
                  "Định hướng dài hạn, mục tiêu chiến lược và cam kết đào tạo nguồn nhân lực chất lượng cao.",
              },
              {
                title: "Cơ cấu tổ chức",
                href: "/ve-hcmute/co-cau-to-chuc",
                description:
                  "Thông tin về hệ thống quản lý, các khoa, viện và đơn vị trực thuộc nhà trường.",
              },
              {
                title: "Ban lãnh đạo",
                href: "/ve-hcmute/ban-lanh-dao",
                description:
                  "Đội ngũ lãnh đạo chủ chốt dẫn dắt nhà trường trong giai đoạn phát triển mới.",
              },
            ],
          },
          {
            title: "Tìm Hiểu Thêm",
            items: [
              {
                title: "Lịch sử phát triển",
                href: "/ve-hcmute/lich-su",
                description:
                  "Các dấu mốc đáng nhớ trong hành trình hơn 60 năm xây dựng và trưởng thành của HCMUTE.",
              },
              {
                title: "Thành tựu",
                href: "/ve-hcmute/thanh-tuu",
                description:
                  "Những ghi nhận nổi bật về nghiên cứu khoa học, đào tạo và hợp tác quốc tế.",
              },
              {
                title: "Đối tác",
                href: "/ve-hcmute/doi-tac",
                description:
                  "Mạng lưới đối tác chiến lược trong và ngoài nước cùng đồng hành cùng nhà trường.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Sinh viên",
      href: "/sinh-vien",
      dropdown: {
        columns: [
          {
            title: "Thông Tin Sinh Viên",
            items: [
              {
                title: "Thông tin sinh viên",
                href: "/sinh-vien/thong-tin",
                description:
                  "Cổng thông tin tổng hợp về lịch học, điểm danh và các dịch vụ hỗ trợ học vụ.",
              },
              {
                title: "Học bổng",
                href: "/sinh-vien/hoc-bong",
                description:
                  "Danh mục học bổng khuyến khích học tập và hỗ trợ tài chính theo từng chương trình.",
              },
              {
                title: "Hoạt động sinh viên",
                href: "/sinh-vien/hoat-dong",
                description:
                  "Các câu lạc bộ, sự kiện và phong trào giúp sinh viên phát triển kỹ năng mềm.",
              },
              {
                title: "Việc làm",
                href: "/sinh-vien/viec-lam",
                description:
                  "Thông tin tuyển dụng, thực tập và cơ hội nghề nghiệp dành cho sinh viên HCMUTE.",
              },
            ],
          },
          {
            title: "Dịch Vụ",
            items: [
              {
                title: "Thư viện",
                href: "/sinh-vien/thu-vien",
                description:
                  "Nguồn tài nguyên số và không gian học tập hiện đại phục vụ sinh viên.",
              },
              {
                title: "Phòng học",
                href: "/sinh-vien/phong-hoc",
                description:
                  "Lịch sử dụng phòng học, phòng thí nghiệm và các tiện ích đặt lịch.",
              },
              {
                title: "Hỗ trợ học tập",
                href: "/sinh-vien/ho-tro",
                description:
                  "Dịch vụ tư vấn học tập, hỗ trợ tâm lý và lộ trình học tập cá nhân hóa.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "CBVC",
      href: "/cbvc",
      dropdown: {
        columns: [
          {
            title: "Thông Tin CBVC",
            items: [
              {
                title: "Thông tin CBVC",
                href: "/cbvc/thong-tin",
                description:
                  "Tra cứu hồ sơ, thông báo và các biểu mẫu dành cho cán bộ, viên chức.",
              },
              {
                title: "Đào tạo & Phát triển",
                href: "/cbvc/dao-tao",
                description:
                  "Chương trình bồi dưỡng chuyên môn, kỹ năng và kế hoạch phát triển nghề nghiệp.",
              },
              {
                title: "Chế độ chính sách",
                href: "/cbvc/che-do-chinh-sach",
                description:
                  "Thông tin về lương, phúc lợi, bảo hiểm và các chính sách hỗ trợ đội ngũ CBVC.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Cựu sinh viên",
      href: "/cuu-sinh-vien",
    },
  ] as NavItem[],
  right: [
    {
      label: "Nghiên cứu",
      href: "/nghien-cuu",
      dropdown: {
        columns: [
          {
            title: "Nghiên Cứu Khoa Học",
            items: [
              {
                title: "Dự án nghiên cứu",
                href: "/nghien-cuu/du-an",
                description:
                  "Các đề tài đang triển khai thuộc nhiều lĩnh vực công nghệ và kỹ thuật.",
              },
              {
                title: "Công bố khoa học",
                href: "/nghien-cuu/cong-bo",
                description:
                  "Danh mục bài báo, tạp chí và sáng chế mới nhất của giảng viên, sinh viên.",
              },
              {
                title: "Hội thảo khoa học",
                href: "/nghien-cuu/hoi-thao",
                description:
                  "Lịch hội thảo, tọa đàm và sự kiện học thuật tại HCMUTE và đối tác.",
              },
            ],
          },
          {
            title: "Hỗ Trợ Nghiên Cứu",
            items: [
              {
                title: "Quỹ nghiên cứu",
                href: "/nghien-cuu/quy",
                description:
                  "Thông tin nguồn quỹ hỗ trợ và hướng dẫn đăng ký tài trợ nghiên cứu.",
              },
              {
                title: "Phòng thí nghiệm",
                href: "/nghien-cuu/phong-thi-nghiem",
                description:
                  "Danh mục phòng thí nghiệm, thiết bị và quy trình đặt lịch sử dụng.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Hợp tác",
      href: "/hop-tac",
      dropdown: {
        columns: [
          {
            title: "Hợp Tác",
            items: [
              {
                title: "Hợp tác quốc tế",
                href: "/hop-tac/quoc-te",
                description:
                  "Chương trình hợp tác với các trường đại học, tổ chức quốc tế.",
              },
              {
                title: "Hợp tác doanh nghiệp",
                href: "/hop-tac/doanh-nghiep",
                description:
                  "Các dự án phối hợp doanh nghiệp trong đào tạo, nghiên cứu và chuyển giao.",
              },
              {
                title: "Trao đổi sinh viên",
                href: "/hop-tac/trao-doi",
                description:
                  "Cơ hội học tập, thực tập và giao lưu văn hóa tại các đối tác toàn cầu.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Tuyển sinh",
      href: "/tuyen-sinh",
      dropdown: {
        columns: [
          {
            title: "Tuyển Sinh",
            items: [
              {
                title: "Tuyển sinh đại học",
                href: "/tuyen-sinh/dai-hoc",
                description:
                  "Thông tin ngành học, phương thức xét tuyển và chỉ tiêu năm 2025.",
              },
              {
                title: "Tuyển sinh thạc sĩ",
                href: "/tuyen-sinh/thac-si",
                description:
                  "Chương trình đào tạo sau đại học và yêu cầu xét tuyển từng chuyên ngành.",
              },
              {
                title: "Hướng dẫn đăng ký",
                href: "/tuyen-sinh/huong-dan",
                description:
                  "Quy trình đăng ký trực tuyến, hồ sơ cần chuẩn bị và mốc thời gian quan trọng.",
              },
              {
                title: "Điểm chuẩn",
                href: "/tuyen-sinh/diem-chuan",
                description:
                  "Tổng hợp điểm chuẩn các năm để thí sinh tham khảo và lựa chọn phù hợp.",
              },
            ],
          },
        ],
      },
    },
    {
      label: "Tin tức & Sự kiện",
      href: "/tin-tuc",
    },
  ] as NavItem[],
};

type FeatureContent = {
  image?: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const FEATURE_CONTENT: Record<string, FeatureContent> = {
  "Về HCMUTE": {
    image: "/carousel/1.jpg",
    badge: "Khám phá HCMUTE",
    title: "Hành trình hơn 60 năm phát triển",
    description:
      "Từ một trường kỹ thuật nhỏ, HCMUTE trở thành đại học công nghệ hàng đầu với hệ sinh thái nghiên cứu – đào tạo toàn diện.",
    href: "/ve-hcmute/gioi-thieu",
    cta: "Khám phá câu chuyện",
  },
  "Sinh viên": {
    image: "/carousel/2.jpg",
    badge: "Đời sống sinh viên",
    title: "Cộng đồng năng động, sáng tạo",
    description:
      "Tham gia hơn 40 câu lạc bộ, chương trình trao đổi quốc tế và hoạt động phát triển kỹ năng dành cho sinh viên.",
    href: "/sinh-vien/hoat-dong",
    cta: "Xem hoạt động nổi bật",
  },
  CBVC: {
    image: "/news/Hinh khoi nghiep 11.jpg",
    badge: "Đồng hành cùng CBVC",
    title: "Môi trường làm việc chuyên nghiệp",
    description:
      "Cập nhật chính sách đào tạo, phát triển chuyên môn và phúc lợi dành cho cán bộ, giảng viên, nhân viên.",
    href: "/cbvc/dao-tao",
    cta: "Xem chương trình hỗ trợ",
  },
  "Nghiên cứu": {
    image: "/news/giai-nha-robot.jpeg",
    badge: "Nghiên cứu khoa học",
    title: "Các đề tài nổi bật tại HCMUTE",
    description:
      "Theo dõi những dự án nghiên cứu, công bố khoa học và hành trình đổi mới sáng tạo của giảng viên, sinh viên.",
    href: "/nghien-cuu/du-an",
    cta: "Khám phá dự án",
  },
  "Hợp tác": {
    image: "/carousel/3.jpg",
    badge: "Kết nối doanh nghiệp",
    title: "Hệ sinh thái đối tác toàn cầu",
    description:
      "Tăng cường hợp tác doanh nghiệp và trường đại học quốc tế, mở rộng cơ hội học tập và nghiên cứu.",
    href: "/hop-tac/doanh-nghiep",
    cta: "Xem mạng lưới đối tác",
  },
  "Tuyển sinh": {
    image: "/news/hoi-thao-ute.jpg",
    badge: "Tuyển sinh 2025",
    title: "Đồng hành cùng bạn vào HCMUTE",
    description:
      "Tổng hợp thông tin xét tuyển, ngành học, học bổng và trải nghiệm thực tế dành cho thí sinh.",
    href: "/tuyen-sinh/dai-hoc",
    cta: "Xem thông tin tuyển sinh",
  },
  "Khu vực": {
    image: "/news/hoi-thao-ute.jpg",
    badge: "Đơn vị HCMUTE",
    title: "Khám phá các đơn vị trực thuộc",
    description:
      "Tìm hiểu về các khoa, viện, phòng ban, trung tâm và tổ chức đoàn thể tại HCMUTE.",
    href: "/khu-vuc",
    cta: "Xem tất cả đơn vị",
  },
};

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [selectedAreaGroup, setSelectedAreaGroup] = useState<number>(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigationWrapperRef = useRef<HTMLDivElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const areaRef = useRef<HTMLDivElement | null>(null);
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const allDesktopItems = useMemo(
    () => [...NAVIGATION.left, ...NAVIGATION.right],
    []
  );

  const activeDropdownItem = useMemo(
    () =>
      openDropdown
        ? allDesktopItems.find(
            (item) => item.label === openDropdown && Boolean(item.dropdown)
          ) ?? null
        : null,
    [allDesktopItems, openDropdown]
  );

  // Check if a path is active
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      // Escape to close modals
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setOpenDropdown(null);
        setIsAreaOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;

      const clickedOutsideNavigation =
        navigationWrapperRef.current &&
        !navigationWrapperRef.current.contains(targetNode);

      const clickedOutsidePanel =
        !dropdownPanelRef.current ||
        !dropdownPanelRef.current.contains(targetNode);

      if (clickedOutsideNavigation && clickedOutsidePanel) {
        setOpenDropdown(null);
      }

      if (languageRef.current && !languageRef.current.contains(targetNode)) {
        setIsLanguageOpen(false);
      }

      if (areaRef.current && !areaRef.current.contains(targetNode)) {
        setIsAreaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleDropdown = (label: string) => {
    setIsAreaOpen(false);
    setIsLanguageOpen(false);
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const renderAreaInitials = (item: AreaItem) => {
    if (item.initials) {
      return item.initials;
    }

    return item.name
      .split(/\s+/)
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const renderDesktopItem = (item: NavItem) => {
    const isActive = isActivePath(item.href);

    if (!item.dropdown) {
      return (
        <Link
          key={item.label}
          href={item.href}
          className={`group relative inline-flex items-center whitespace-nowrap text-sm font-semibold transition-colors duration-200 ${
            isActive ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
          }`}
        >
          {item.label}
          <span
            className={`pointer-events-none absolute inset-x-0 bottom-[-4px] block h-0.5 origin-left bg-blue-700 transition-transform duration-200 ease-out ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </Link>
      );
    }

    const isOpen = openDropdown === item.label;

    return (
      <div key={item.label} className="relative">
        <button
          type="button"
          onClick={() => handleToggleDropdown(item.label)}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={`group relative inline-flex items-center whitespace-nowrap text-sm font-semibold transition-colors duration-200 focus:outline-none ${
            isActive || isOpen
              ? "text-blue-700"
              : "text-gray-800 hover:text-blue-700"
          }`}
        >
          {item.label}
          <span
            className={`pointer-events-none absolute inset-x-0 bottom-[-4px] block h-0.5 origin-left bg-blue-700 transition-transform duration-200 ease-out ${
              isActive || isOpen
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </button>
      </div>
    );
  };

  const renderMobileSection = (items: NavItem[]) =>
    items.map((item) => {
      if (!item.dropdown) {
        return (
          <Link
            key={item.label}
            href={item.href}
            className="block rounded-lg px-4 py-2 text-base font-medium text-gray-800 transition-colors duration-150 hover:bg-gray-100"
            onClick={() => setIsSheetOpen(false)}
          >
            {item.label}
          </Link>
        );
      }

      return (
        <div key={item.label}>
          <h3 className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
            {item.label}
          </h3>
          <div className="mt-3 space-y-3 border-l-2 border-slate-200 pl-4">
            {item.dropdown.columns.map((column, columnIndex) => (
              <div key={`${item.label}-mobile-column-${columnIndex}`}>
                <p className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {column.title}
                </p>
                <ul className="mt-2 space-y-2">
                  {column.items.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        href={subItem.href}
                        onClick={() => setIsSheetOpen(false)}
                        className="block text-sm text-gray-700 transition-colors duration-150 hover:text-blue-700"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    });

  const renderMobileAreas = () => (
    <div className="space-y-3">
      <h3 className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
        Khu vực
      </h3>
      {AREA_GROUPS.map((group) => (
        <div key={group.title} className="px-4">
          <p className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold  text-slate-600">
            {group.title}
          </p>
          <ul className="mt-2 space-y-2">
            {group.items.map((area) => (
              <li key={area.name}>
                <Link
                  href={area.href}
                  onClick={() => setIsSheetOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-150 hover:bg-gray-100"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">
                    {renderAreaInitials(area)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {area.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {area.description}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderDropdownContent = () => {
    if (!activeDropdownItem?.dropdown) {
      return null;
    }

    const columns = activeDropdownItem.dropdown.columns;
    const columnCount = columns.length;
    const columnLayoutClass =
      columnCount >= 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : columnCount === 2
        ? "sm:grid-cols-2"
        : "grid-cols-1 max-w-sm";

    const feature = FEATURE_CONTENT[activeDropdownItem.label] ?? {
      image: DEFAULT_FEATURE_IMAGE,
      badge: activeDropdownItem.label,
      title: "Khám phá thêm về HCMUTE",
      description:
        "Truy cập vào trang thông tin để tìm hiểu sâu hơn về chương trình, cơ hội học tập và hoạt động nổi bật.",
      href: activeDropdownItem.href,
      cta: "Xem chi tiết",
    };

    return (
      <>
        <div
          className="fixed inset-0 top-16 z-[90] bg-black/45"
          onClick={() => setOpenDropdown(null)}
        />
        <div
          ref={dropdownPanelRef}
          className="fixed inset-x-0 top-16 z-[110] border-b border-white/15 bg-gradient-to-br from-white/12 via-white/8 to-white/4 px-6 py-14 shadow-[0_35px_160px_-45px_rgba(15,23,42,0.75)] backdrop-blur-2xl sm:px-12 lg:px-20"
        >
          <div className="mx-auto grid w-full max-w-[1300px] gap-12 text-white lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
            <div className={`grid gap-x-12 gap-y-8 ${columnLayoutClass}`}>
              {columns.map((column, columnIndex) => (
                <div key={`${activeDropdownItem.label}-column-${columnIndex}`}>
                  <h3 className="text-2xl font-semibold font-work-sans uppercase tracking-[0.1em] text-white/95 drop-shadow-md">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {column.items.map((subItem) => (
                      <li key={subItem.title} className="group">
                        <Link
                          href={subItem.href}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-slate-100 transition-all duration-200 hover:bg-white/12 hover:text-white"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="flex flex-col gap-1.5 text-left">
                            <span className="text-sm font-semibold text-white transition-transform duration-200 group-hover:translate-x-1">
                              {subItem.title}
                            </span>
                            {subItem.description && (
                              <span className="hidden text-base leading-relaxed text-slate-300 transition-colors duration-200 md:block group-hover:text-white/80">
                                {subItem.description}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-semibold text-sky-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link
              href={feature.href}
              onClick={() => setOpenDropdown(null)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/12 p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/10">
                <Image
                  src={feature.image || DEFAULT_FEATURE_IMAGE}
                  alt={feature.title}
                  width={320}
                  height={240}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col justify-between space-y-4">
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                  {feature.badge}
                </span>
                <h4 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-slate-900">
                  {feature.title}
                </h4>
                <p className="text-base leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-slate-600">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors duration-300 group-hover:text-sky-600">
                  {feature.cta}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  };

  const renderAreaDropdownContent = () => {
    if (!isAreaOpen) return null;

    const currentGroup = AREA_GROUPS[selectedAreaGroup];

    return (
      <>
        <div
          className="fixed inset-0 top-16 z-[90] bg-black/45"
          onClick={() => setIsAreaOpen(false)}
        />
        <div
          ref={dropdownPanelRef}
          className="fixed inset-x-0 top-16 z-[110] border-b border-white/15 bg-gradient-to-br from-white/12 via-white/8 to-white/4 px-6 py-14 shadow-[0_35px_160px_-45px_rgba(15,23,42,0.75)] backdrop-blur-2xl sm:px-12 lg:px-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto w-full max-w-[1300px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              {/* Left: Items in 2-column grid with scroll */}
              <div className="max-h-[70vh] overflow-y-auto pr-4 area-dropdown-scroll">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentGroup.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-slate-100 transition-all duration-200 hover:bg-white/15 hover:text-white"
                      onClick={() => setIsAreaOpen(false)}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white transition-colors duration-200 group-hover:bg-white/20">
                        {renderAreaInitials(item)}
                      </span>
                      <div className="flex flex-1 flex-col gap-1">
                        <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-300 group-hover:text-white/80">
                          {item.description}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-sky-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Group Tags */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white/95 drop-shadow-md">
                  Danh mục
                </h3>
                <div className="flex flex-col gap-2">
                  {AREA_GROUPS.map((group, index) => (
                    <button
                      key={group.title}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAreaGroup(index);
                      }}
                      className={`rounded-xl px-5 py-3 text-left text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                        selectedAreaGroup === index
                          ? "bg-white text-blue-700 shadow-lg"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {group.title}
                      <span className="ml-2 text-xs opacity-70">
                        ({group.items.length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {renderDropdownContent()}
      {renderAreaDropdownContent()}

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="mx-auto mt-20 max-w-2xl rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-gray-200 p-4">
              <Search size={20} className="text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Tìm kiếm..."
                className="flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                autoFocus
              />
              <kbd className="hidden rounded border border-gray-300 px-2 py-1 text-xs text-gray-500 sm:inline-block">
                ESC
              </kbd>
            </div>
            <div className="p-4 text-sm text-gray-500">
              Kết quả tìm kiếm sẽ hiển thị ở đây...
            </div>
          </div>
        </div>
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${
          isScrolled
            ? "border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-lg"
            : "border-gray-200/30 bg-white/60 backdrop-blur-xl"
        }`}
      >
        <div
          ref={navigationWrapperRef}
          className="relative mx-auto max-w-[1200px] px-6"
        >
          <nav className="flex h-16 items-center">
            <div className="hidden flex-1 items-center justify-end gap-8 pr-6 lg:flex">
              {NAVIGATION.left.map((item) => renderDesktopItem(item))}
            </div>

            <div className="relative flex shrink-0 items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center"
              >
                <Image
                  src={LOGO_SRC}
                  alt="HCMUTE Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 hover:scale-105"
                  priority
                  style={{ margin: 10 }}
                />
              </Link>
            </div>

            <div className="hidden flex-1 items-center justify-start gap-8 pl-6 lg:flex">
              {NAVIGATION.right.map((item) => renderDesktopItem(item))}

              <div className="ml-auto flex items-center gap-3">
                <div className="relative" ref={areaRef}>
                  <Button
                    variant="outline"
                    className="rounded-3xl"
                    size="icon"
                    onClick={() => {
                      setIsAreaOpen((value) => !value);
                      setIsLanguageOpen(false);
                      setOpenDropdown(null);
                    }}
                    aria-label="Submit"
                  >
                    <Globe size={16} className="opacity-80" />
                  </Button>
                  {/* <Button
                    type="button"
                    onClick={() => {
                      setIsAreaOpen((value) => !value);
                      setIsLanguageOpen(false);
                      setOpenDropdown(null);
                    }}
                    aria-expanded={isAreaOpenC}
                    aria-haspopup="menu"
                    className="flex items-center justify-center rounded-full border border-slate-200 p-2 text-xs font-medium text-slate-700 transition-colors duration-150 hover:border-sky-200 hover:text-sky-700 focus:outline-none"
                  >
                    <Globe size={16} className="opacity-80" />
                  </Button> */}
                </div>

                <div className="relative" ref={languageRef}>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      setIsLanguageOpen((value) => !value);
                      setIsAreaOpen(false);
                    }}
                    aria-expanded={isLanguageOpen}
                    aria-haspopup="menu"
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-150 hover:border-blue-200 hover:text-blue-700 focus:outline-none"
                  >
                    <img
                      src="https://flagcdn.com/w20/vn.png"
                      alt="Vietnam flag"
                      width={20}
                      height={14}
                      className="shrink-0 rounded"
                    />
                    <span>VN</span>
                  </Button>

                  {isLanguageOpen && (
                    <div className="absolute flex gap-2 flex-col right-0 z-[110] mt-2 w-32 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                      <Button
                        variant={"ghost"}
                        onClick={() => {
                          setIsLanguageOpen((value) => !value);
                          setIsAreaOpen(false);
                        }}
                        aria-expanded={isLanguageOpen}
                        aria-haspopup="menu"
                        className="w-full flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-150 hover:border-blue-200 hover:text-blue-700 focus:outline-none"
                      >
                        <img
                          src="https://flagcdn.com/w20/vn.png"
                          alt="Vietnam flag"
                          width={20}
                          height={14}
                          className="shrink-0 rounded"
                        />
                        <span>VN</span>
                      </Button>
                      <Button
                        variant={"outline"}
                        onClick={() => {
                          setIsLanguageOpen((value) => !value);
                          setIsAreaOpen(false);
                        }}
                        aria-expanded={isLanguageOpen}
                        aria-haspopup="menu"
                        className="w-full flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-150 hover:border-blue-200 hover:text-blue-700 focus:outline-none"
                      >
                        <img
                          src="https://flagcdn.com/w20/gb.png"
                          alt="Vietnam flag"
                          width={20}
                          height={14}
                          className="shrink-0 rounded"
                        />
                        <span>VN</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="ml-auto lg:hidden">
              <button
                type="button"
                onClick={() => setIsSheetOpen(true)}
                className="rounded-full border border-gray-200 p-2 text-gray-700"
              >
                <Menu size={18} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left" className="flex w-full max-w-xs flex-col p-0">
          <SheetHeader className="flex flex-row items-center justify-between border-b px-4 py-3">
            <SheetTitle className="text-left text-base font-semibold text-gray-900">
              Menu
            </SheetTitle>
            <button
              type="button"
              onClick={() => setIsSheetOpen(false)}
              className="rounded-full border border-gray-200 p-2 text-gray-600 transition-colors duration-150 hover:border-gray-300 hover:text-gray-900"
            ></button>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 px-4 py-6">
              <section className="space-y-4">
                {renderMobileSection(NAVIGATION.left)}
              </section>
              <section className="space-y-4 border-t border-gray-100 pt-4">
                {renderMobileSection(NAVIGATION.right)}
              </section>
              <section className="space-y-4 border-t border-gray-100 pt-4">
                {renderMobileAreas()}
              </section>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
