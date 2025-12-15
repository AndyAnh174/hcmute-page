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
import {
  ArrowLeft,
  Plus,
  Upload,
  Trash2,
  Edit,
  GripVertical,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const bannerItems = [
  {
    id: 1,
    title: "Banner chào mừng năm học mới",
    image: "/carousel/1.jpg",
    status: "active",
    order: 1,
  },
  {
    id: 2,
    title: "Tuyển sinh 2025",
    image: "/carousel/2.jpg",
    status: "active",
    order: 2,
  },
  {
    id: 3,
    title: "Kỷ niệm 60 năm thành lập",
    image: "/carousel/3.jpg",
    status: "inactive",
    order: 3,
  },
];

export default function BannersManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/admin/pages">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-blue-900">
              Quản lý Banner & Carousel
            </h1>
            <p className="text-muted-foreground">
              Quản lý hình ảnh banner và slideshow
            </p>
          </div>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm banner
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Carousel trang chủ</CardTitle>
            <CardDescription>
              Kéo thả để thay đổi thứ tự hiển thị
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bannerItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-muted/30"
                >
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <div className="relative w-48 h-28 rounded-lg overflow-hidden bg-muted">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm">
                      Banner {item.order}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Vị trí: {item.order}
                    </p>
                  </div>
                  <Badge
                    variant={item.status === "active" ? "default" : "secondary"}
                  >
                    {item.status === "active" ? "Hoạt động" : "Ẩn"}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Banner mới</CardTitle>
            <CardDescription>
              Kích thước khuyến nghị: 1920x600px
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Kéo thả hình ảnh vào đây hoặc
              </p>
              <Button variant="outline">Chọn file</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cài đặt Carousel</CardTitle>
            <CardDescription>Tùy chỉnh cách hiển thị carousel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Tự động chuyển slide</span>
              <Badge>Bật</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Thời gian chuyển</span>
              <span className="text-sm text-muted-foreground">5 giây</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Hiệu ứng chuyển</span>
              <span className="text-sm text-muted-foreground">Fade</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
