"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "HCMUTE tổ chức lễ khai giảng năm học mới 2024-2025",
    category: "Sự kiện",
    status: "published",
    date: "15/12/2024",
    views: 1250,
  },
  {
    id: 2,
    title: "Sinh viên HCMUTE đạt giải cao tại cuộc thi lập trình quốc tế",
    category: "Thành tựu",
    status: "published",
    date: "14/12/2024",
    views: 890,
  },
  {
    id: 3,
    title: "Thông báo lịch thi cuối kỳ học kỳ 1 năm học 2024-2025",
    category: "Thông báo",
    status: "published",
    date: "13/12/2024",
    views: 2100,
  },
  {
    id: 4,
    title: "Hội thảo khoa học về AI trong giáo dục",
    category: "Hội thảo",
    status: "draft",
    date: "12/12/2024",
    views: 0,
  },
  {
    id: 5,
    title: "Chương trình trao đổi sinh viên với các trường quốc tế",
    category: "Hợp tác",
    status: "published",
    date: "11/12/2024",
    views: 567,
  },
];

export default function NewsManagementPage() {
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
              Quản lý tin tức
            </h1>
            <p className="text-muted-foreground">
              Thêm, sửa, xóa bài viết tin tức
            </p>
          </div>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm bài viết
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Danh sách bài viết</CardTitle>
              <CardDescription>
                Tổng cộng {newsItems.length} bài viết
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm bài viết..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Tiêu đề</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày đăng</TableHead>
                <TableHead className="text-right">Lượt xem</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {newsItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "published" ? "default" : "secondary"
                      }
                    >
                      {item.status === "published" ? "Đã đăng" : "Bản nháp"}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    {item.views.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
