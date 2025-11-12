"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const SQUARE_LOGO = "/logo/square_logo.png";

// Menu items data organized for Apple-style dropdown
const menuItems = {
  left: [
    {
      label: "Về HCMUTE",
      href: "/ve-hcmute",
      dropdown: {
        columns: [
          {
            title: "Khám Phá HCMUTE",
            items: [
              { title: "Giới thiệu chung", href: "/ve-hcmute/gioi-thieu", bold: false },
              { title: "Tầm nhìn & Sứ mệnh", href: "/ve-hcmute/tam-nhin-su-menh", bold: false },
              { title: "Cơ cấu tổ chức", href: "/ve-hcmute/co-cau-to-chuc", bold: false },
              { title: "Ban lãnh đạo", href: "/ve-hcmute/ban-lanh-dao", bold: false },
            ],
          },
          {
            title: "Tìm Hiểu Thêm",
            items: [
              { title: "Lịch sử phát triển", href: "/ve-hcmute/lich-su", bold: false },
              { title: "Thành tựu", href: "/ve-hcmute/thanh-tuu", bold: false },
              { title: "Đối tác", href: "/ve-hcmute/doi-tac", bold: false },
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
              { title: "Thông tin sinh viên", href: "/sinh-vien/thong-tin", bold: false },
              { title: "Học bổng", href: "/sinh-vien/hoc-bong", bold: false },
              { title: "Hoạt động sinh viên", href: "/sinh-vien/hoat-dong", bold: false },
              { title: "Việc làm", href: "/sinh-vien/viec-lam", bold: false },
            ],
          },
          {
            title: "Dịch Vụ",
            items: [
              { title: "Thư viện", href: "/sinh-vien/thu-vien", bold: false },
              { title: "Phòng học", href: "/sinh-vien/phong-hoc", bold: false },
              { title: "Hỗ trợ học tập", href: "/sinh-vien/ho-tro", bold: false },
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
              { title: "Thông tin CBVC", href: "/cbvc/thong-tin", bold: false },
              { title: "Đào tạo & Phát triển", href: "/cbvc/dao-tao", bold: false },
              { title: "Chế độ chính sách", href: "/cbvc/che-do-chinh-sach", bold: false },
            ],
          },
        ],
      },
    },
    {
      label: "Cựu sinh viên",
      href: "/cuu-sinh-vien",
    },
  ],
  right: [
    {
      label: "Nghiên cứu",
      href: "/nghien-cuu",
      dropdown: {
        columns: [
          {
            title: "Nghiên Cứu Khoa Học",
            items: [
              { title: "Dự án nghiên cứu", href: "/nghien-cuu/du-an", bold: false },
              { title: "Công bố khoa học", href: "/nghien-cuu/cong-bo", bold: false },
              { title: "Hội thảo khoa học", href: "/nghien-cuu/hoi-thao", bold: false },
            ],
          },
          {
            title: "Hỗ Trợ Nghiên Cứu",
            items: [
              { title: "Quỹ nghiên cứu", href: "/nghien-cuu/quy", bold: false },
              { title: "Phòng thí nghiệm", href: "/nghien-cuu/phong-thi-nghiem", bold: false },
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
              { title: "Hợp tác quốc tế", href: "/hop-tac/quoc-te", bold: false },
              { title: "Hợp tác doanh nghiệp", href: "/hop-tac/doanh-nghiep", bold: false },
              { title: "Trao đổi sinh viên", href: "/hop-tac/trao-doi", bold: false },
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
              { title: "Tuyển sinh đại học", href: "/tuyen-sinh/dai-hoc", bold: false },
              { title: "Tuyển sinh thạc sĩ", href: "/tuyen-sinh/thac-si", bold: false },
              { title: "Hướng dẫn đăng ký", href: "/tuyen-sinh/huong-dan", bold: false },
              { title: "Điểm chuẩn", href: "/tuyen-sinh/diem-chuan", bold: false },
            ],
          },
        ],
      },
    },
    {
      label: "Tin tức & Sự kiện",
      href: "/tin-tuc",
    },
  ],
};

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup timeout on unmount
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const renderMenuItem = (item: typeof menuItems.left[0], side: "left" | "right") => {
    if (!item.dropdown) {
      return (
        <div className="relative group">
          <Link
            href={item.href}
            className="text-base font-medium text-gray-800 hover:text-blue-700 transition-colors py-2 px-1 relative inline-block"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      );
    }

    return (
      <div
        className="relative group"
        onMouseEnter={() => {
          // Clear timeout when entering menu item
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
          }
          setHoveredMenu(item.label);
          setShowOverlay(true);
        }}
        onMouseLeave={() => {
          // Clear any existing timeout
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          // Small delay to allow moving to dropdown
          hoverTimeoutRef.current = setTimeout(() => {
            setHoveredMenu(null);
            setShowOverlay(false);
          }, 150);
        }}
      >
        <Link
          href={item.href}
          className="text-base font-medium text-gray-800 hover:text-blue-700 transition-colors py-2 px-1 relative inline-block"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {hoveredMenu === item.label && (
          <div 
            className="fixed top-[100px] left-0 right-0 bg-white shadow-lg border-b border-gray-200 py-12 px-24 z-50 fade-in pointer-events-auto"
            onMouseEnter={() => {
              // Clear timeout when entering dropdown
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
              }
              setHoveredMenu(item.label);
              setShowOverlay(true);
            }}
            onMouseLeave={() => {
              setHoveredMenu(null);
              setShowOverlay(false);
            }}
          >
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-3 gap-20">
              {item.dropdown.columns.map((column, colIdx) => (
                <div key={colIdx}>
                  <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-6">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((subItem, idx) => (
                      <li key={idx}>
                        <Link
                          href={subItem.href}
                          className={`block text-gray-800 hover:text-blue-700 transition-colors leading-relaxed ${
                            subItem.bold 
                              ? "font-semibold text-base" 
                              : "font-normal text-sm"
                          }`}
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
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay backdrop when menu is open - mờ màn hình phía dưới */}
      {showOverlay && hoveredMenu && (
        <div 
          className="fixed inset-0 top-[100px] bg-black/20 backdrop-blur-md z-40 fade-in"
          onMouseEnter={() => {
            setHoveredMenu(null);
            setShowOverlay(false);
          }}
        />
      )}
      
      {/* Top Bar - Thông tin liên hệ */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white text-sm" data-top-bar>
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="flex items-center justify-between h-9">
            <div className="hidden md:flex items-center space-x-6">
              <span className="hover:text-blue-200 transition-colors cursor-pointer">
                📧 info@hcmute.edu.vn
              </span>
              <span className="hover:text-blue-200 transition-colors cursor-pointer">
                📞 (028) 3896 6798
              </span>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <select className="bg-transparent border-none text-white hover:text-blue-200 transition-colors cursor-pointer focus:outline-none text-xs">
                <option value="VN" className="bg-blue-900">VN</option>
                <option value="EN" className="bg-blue-900">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="fixed top-9 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 relative">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 pr-12">
              {menuItems.left.map((item, idx) => (
                <div key={idx}>{renderMenuItem(item, "left")}</div>
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <Image
                  src={SQUARE_LOGO}
                  alt="HCMUTE Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end pl-12">
              {menuItems.right.map((item, idx) => (
                <div key={idx}>{renderMenuItem(item, "right")}</div>
              ))}
              
              {/* Search and Language */}
              <div className="flex items-center space-x-4 ml-4">
                <button className="text-gray-700 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-full">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsSheetOpen(true)}
                className="text-gray-900"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left" className="w-full sm:w-96 p-0">
          <SheetHeader className="border-b p-6">
            {/* <div className="flex justify-between items-center">
              <SheetTitle>Menu</SheetTitle>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="text-gray-700"
              >
                <X size={24} />
              </button>
            </div> */}
          </SheetHeader>

          <div className="flex flex-col space-y-0 p-6">
            <div className="space-y-6">
              {/* Left menu items */}
              {menuItems.left.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        {item.label}
                      </h3>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.columns.map((column, colIdx) =>
                          column.items.map((subItem, subIdx) => (
                            <Link
                              key={`${colIdx}-${subIdx}`}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-gray-900 transition-colors py-1"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-semibold text-gray-900 hover:text-gray-600 transition-colors py-2 block"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Right menu items */}
              {menuItems.right.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        {item.label}
                      </h3>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.columns.map((column, colIdx) =>
                          column.items.map((subItem, subIdx) => (
                            <Link
                              key={`${colIdx}-${subIdx}`}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-gray-900 transition-colors py-1"
                              onClick={() => setIsSheetOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-semibold text-gray-900 hover:text-gray-600 transition-colors py-2 block"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
