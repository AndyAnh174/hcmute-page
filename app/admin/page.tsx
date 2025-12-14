"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import React from "react";

const chartData = [
  { day: "T2", visitors: 4500 },
  { day: "T3", visitors: 6000 },
  { day: "T4", visitors: 7500 },
  { day: "T5", visitors: 5000 },
  { day: "T6", visitors: 8000 },
  { day: "T7", visitors: 9500 },
  { day: "CN", visitors: 8500 },
];

const chartConfig = {
  visitors: {
    label: "Truy cập",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-blue-900">
          Tổng quan
        </h1>
        <p className="text-muted-foreground">
          Chào mừng trở lại, Admin! Đây là hoạt động hôm nay của bạn.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Tổng lượt truy cập",
            value: "45,231",
            change: "+20.1% so với tháng trước",
            color: "text-green-600",
          },
          {
            title: "Người dùng đang online",
            value: "2,350",
            change: "+180 trong 1 giờ qua",
            color: "text-green-600",
          },
          {
            title: "Bài viết mới",
            value: "12",
            change: "trong tuần này",
            color: "text-muted-foreground",
          },
          {
            title: "Thời gian trung bình",
            value: "5m 32s",
            change: "-1.2% so với hôm qua",
            color: "text-red-500",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="rounded-2xl border-none shadow-md bg-white hover:shadow-lg transition-all"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{item.value}</div>
              <p className={`text-sm font-medium mt-2 ${item.color}`}>
                {item.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Areas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 rounded-3xl shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle>Biểu đồ truy cập</CardTitle>
            <CardDescription>
              Số liệu thống kê truy cập trong 7 ngày qua
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="visitors"
                  fill="var(--color-visitors)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3 rounded-3xl shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle>Trang xem nhiều</CardTitle>
            <CardDescription>
              Các trang được truy cập nhiều nhất hôm nay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trang</TableHead>
                  <TableHead className="text-right">Lượt xem</TableHead>
                  <TableHead className="text-right">Thay đổi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    page: "/tin-tuc/tuyen-sinh-2025",
                    views: "12,342",
                    change: "+12%",
                  },
                  {
                    page: "/gioi-thieu/lich-su-phat-trien",
                    views: "8,234",
                    change: "+5%",
                  },
                  {
                    page: "/dao-tao/dai-hoc-chinh-quy",
                    views: "6,123",
                    change: "-2%",
                  },
                  {
                    page: "/nghien-cuu/hoi-nghi-khoa-hoc",
                    views: "3,452",
                    change: "+8%",
                  },
                  { page: "/lien-he", views: "1,234", change: "+0%" },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium text-gray-900 truncate max-w-[150px]">
                        {item.page}
                      </div>
                      <div className="text-xs text-gray-500">HCMUTE Page</div>
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {item.views}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          item.change.startsWith("+")
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          item.change.startsWith("+")
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {item.change}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
