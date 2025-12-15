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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Save, Eye } from "lucide-react";
import Link from "next/link";

export default function HomePageEditor() {
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
              Chỉnh sửa trang chủ
            </h1>
            <p className="text-muted-foreground">
              Quản lý nội dung hiển thị trên trang chủ
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Xem trước
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Lưu thay đổi
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription>Phần banner chính trên trang chủ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tiêu đề chính</Label>
              <Input defaultValue="Trường Đại học Sư phạm Kỹ thuật TP.HCM" />
            </div>
            <div className="space-y-2">
              <Label>Phụ đề</Label>
              <Input defaultValue="Ho Chi Minh City University of Technology and Education" />
            </div>
            <div className="space-y-2">
              <Label>Slogan</Label>
              <Input defaultValue="Tri thức - Sáng tạo - Hội nhập" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Video giới thiệu</CardTitle>
            <CardDescription>
              Video hiển thị trong phần giới thiệu
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>URL Video YouTube</Label>
              <Input placeholder="https://youtube.com/watch?v=..." />
            </div>
            <div className="space-y-2">
              <Label>Tiêu đề video</Label>
              <Input defaultValue="Giới thiệu HCMUTE" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thống kê</CardTitle>
            <CardDescription>Các con số thống kê hiển thị</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Số sinh viên</Label>
                <Input type="number" defaultValue="30000" />
              </div>
              <div className="space-y-2">
                <Label>Số giảng viên</Label>
                <Input type="number" defaultValue="1000" />
              </div>
              <div className="space-y-2">
                <Label>Số ngành đào tạo</Label>
                <Input type="number" defaultValue="50" />
              </div>
              <div className="space-y-2">
                <Label>Năm thành lập</Label>
                <Input type="number" defaultValue="1962" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Giá trị cốt lõi</CardTitle>
            <CardDescription>Các giá trị cốt lõi của trường</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Giá trị 1</Label>
              <Input defaultValue="Chất lượng" />
            </div>
            <div className="space-y-2">
              <Label>Giá trị 2</Label>
              <Input defaultValue="Sáng tạo" />
            </div>
            <div className="space-y-2">
              <Label>Giá trị 3</Label>
              <Input defaultValue="Hội nhập" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
