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
import {
  ArrowLeft,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Building2,
} from "lucide-react";
import Link from "next/link";

const unitItems = [
  {
    id: 1,
    name: "Khoa Công nghệ Thông tin",
    type: "Khoa",
    head: "PGS.TS Nguyễn Văn A",
    staff: 120,
    status: "active",
  },
  {
    id: 2,
    name: "Khoa Điện - Điện tử",
    type: "Khoa",
    head: "TS. Trần Văn B",
    staff: 95,
    status: "active",
  },
  {
    id: 3,
    name: "Khoa Cơ khí",
    type: "Khoa",
    head: "PGS.TS Lê Văn C",
    staff: 85,
    status: "active",
  },
  {
    id: 4,
    name: "Phòng Đào tạo",
    type: "Phòng ban",
    head: "ThS. Phạm Văn D",
    staff: 25,
    status: "active",
  },
  {
    id: 5,
    name: "Trung tâm Thư viện",
    type: "Trung tâm",
    head: "ThS. Hoàng Văn E",
    staff: 30,
    status: "active",
  },
];

export default function UnitsManagementPage() {
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
              Quản lý đơn vị
            </h1>
            <p className="text-muted-foreground">
              Quản lý thông tin các khoa, phòng ban, trung tâm
            </p>
          </div>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Thêm đơn vị
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Khoa</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              15
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Phòng ban</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-green-600" />
              12
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Trung tâm</CardDescription>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-600" />8
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Danh sách đơn vị</CardTitle>
              <CardDescription>
                Tổng cộng {unitItems.length} đơn vị
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Tìm kiếm đơn vị..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Tên đơn vị</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Trưởng đơn vị</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Nhân sự</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unitItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.type}</Badge>
                  </TableCell>
                  <TableCell>{item.head}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "active" ? "default" : "secondary"
                      }
                    >
                      {item.status === "active" ? "Hoạt động" : "Tạm dừng"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.staff}</TableCell>
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
