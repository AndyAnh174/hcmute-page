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
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  Plus,
  Search,
  Edit,
  Trash2,
  Globe,
  BookOpen,
  GraduationCap,
  FileText,
  Users,
  Building,
  Briefcase,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

const extensionItems = [
  {
    id: 1,
    name: "HCMUTE Portal",
    description: "Cổng thông tin sinh viên và giảng viên",
    url: "https://portal.hcmute.edu.vn",
    icon: Globe,
    status: "active",
    category: "Chính",
  },
  {
    id: 2,
    name: "Thư viện số",
    description: "Hệ thống thư viện điện tử",
    url: "https://lib.hcmute.edu.vn",
    icon: BookOpen,
    status: "active",
    category: "Học tập",
  },
  {
    id: 3,
    name: "E-Learning (LMS)",
    description: "Hệ thống học trực tuyến",
    url: "https://lms.hcmute.edu.vn",
    icon: GraduationCap,
    status: "active",
    category: "Học tập",
  },
  {
    id: 4,
    name: "Tuyển sinh",
    description: "Thông tin tuyển sinh đại học, sau đại học",
    url: "https://tuyensinh.hcmute.edu.vn",
    icon: FileText,
    status: "active",
    category: "Tuyển sinh",
  },
  {
    id: 5,
    name: "Nghiên cứu khoa học SV",
    description: "Hệ thống quản lý nghiên cứu khoa học sinh viên",
    url: "https://nckhsv.hcmute.edu.vn",
    icon: FlaskConical,
    status: "active",
    category: "Nghiên cứu",
  },
  {
    id: 6,
    name: "Cựu sinh viên",
    description: "Mạng lưới cựu sinh viên HCMUTE",
    url: "https://alumni.hcmute.edu.vn",
    icon: Users,
    status: "active",
    category: "Cộng đồng",
  },
  {
    id: 7,
    name: "Đào tạo sau đại học",
    description: "Thông tin đào tạo thạc sĩ, tiến sĩ",
    url: "https://sdh.hcmute.edu.vn",
    icon: GraduationCap,
    status: "active",
    category: "Đào tạo",
  },
  {
    id: 8,
    name: "Doanh nghiệp",
    description: "Hợp tác với doanh nghiệp, việc làm sinh viên",
    url: "https://business.hcmute.edu.vn",
    icon: Briefcase,
    status: "inactive",
    category: "Hợp tác",
  },
];

const categories = [
  "Tất cả",
  "Chính",
  "Học tập",
  "Tuyển sinh",
  "Nghiên cứu",
  "Đào tạo",
  "Cộng đồng",
  "Hợp tác",
];

export default function ExtensionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-900">
            Extension
          </h1>
          <p className="text-muted-foreground mt-1">
            Quản lý các liên kết hệ thống và website liên quan
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm Extension
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm extension..." className="pl-9" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tất cả" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extensions Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {extensionItems.map((item) => (
          <Card
            key={item.id}
            className="group hover:shadow-lg transition-all duration-200"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                  </div>
                </div>
                <Badge
                  variant={item.status === "active" ? "default" : "secondary"}
                >
                  {item.status === "active" ? "Hoạt động" : "Tạm dừng"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="min-h-[40px] text-sm">
                {item.description}
              </CardDescription>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground truncate">
                <Globe className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{item.url}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button asChild variant="default" size="sm" className="flex-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Truy cập
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links Section */}
      <Card>
        <CardHeader>
          <CardTitle>Liên kết nhanh</CardTitle>
          <CardDescription>
            Danh sách tất cả các extension đang hoạt động
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {extensionItems
              .filter((item) => item.status === "active")
              .map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium flex-1">
                    {item.name}
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
