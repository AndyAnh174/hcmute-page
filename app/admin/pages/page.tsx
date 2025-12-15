"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Home,
  Newspaper,
  ImageIcon,
  GraduationCap,
  Building2,
  ArrowRight,
  Edit,
  Eye,
} from "lucide-react";

const pageItems = [
  {
    title: "Trang chủ",
    description:
      "Quản lý nội dung trang chủ, hero section, và các phần giới thiệu",
    icon: Home,
    href: "/admin/pages/home",
    status: "active",
    lastUpdated: "2 giờ trước",
  },
  {
    title: "Tin tức",
    description: "Quản lý bài viết, tin tức, sự kiện của trường",
    icon: Newspaper,
    href: "/admin/pages/news",
    status: "active",
    lastUpdated: "30 phút trước",
  },
  {
    title: "Banner & Carousel",
    description: "Quản lý hình ảnh banner, carousel, và slideshow",
    icon: ImageIcon,
    href: "/admin/pages/banners",
    status: "active",
    lastUpdated: "1 ngày trước",
  },
  {
    title: "Đào tạo",
    description: "Quản lý thông tin ngành học, chương trình đào tạo",
    icon: GraduationCap,
    href: "/admin/pages/education",
    status: "draft",
    lastUpdated: "3 ngày trước",
  },
  {
    title: "Đơn vị",
    description: "Quản lý thông tin các khoa, phòng ban, trung tâm",
    icon: Building2,
    href: "/admin/pages/units",
    status: "active",
    lastUpdated: "1 tuần trước",
  },
];

export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-900">
          Quản lý trang
        </h1>
        <p className="text-muted-foreground mt-1">
          Quản lý nội dung các trang của website HCMUTE
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((item) => (
          <Card
            key={item.title}
            className="group hover:shadow-lg transition-all duration-200"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
                <Badge
                  variant={item.status === "active" ? "default" : "secondary"}
                >
                  {item.status === "active" ? "Hoạt động" : "Bản nháp"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="min-h-[40px]">
                {item.description}
              </CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Cập nhật: {item.lastUpdated}</span>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={item.href}>
                    <Edit className="h-4 w-4 mr-1" />
                    Chỉnh sửa
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/" target="_blank">
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
