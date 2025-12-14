import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  FileText,
  BarChart,
  Settings,
  LogOut,
  Users,
  Bell,
  Search,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-white dark:bg-gray-950 hidden md:flex flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center justify-center w-full gap-2 font-bold text-xl text-blue-800 dark:text-blue-400">
             <Image
              src="/logo/square_logo.png"
              alt="HCMUTE"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2.5 text-blue-700 transition-all hover:text-blue-700 dark:bg-gray-800 dark:text-blue-400"
            >
              <LayoutDashboard className="h-4 w-4" />
              Tổng quan
            </Link>
            <Link
              href="/admin/pages"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            >
              <FileText className="h-4 w-4" />
              Quản lý trang
            </Link>
            <Link
              href="/admin/visits"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            >
              <Users className="h-4 w-4" />
              Lượt truy cập
            </Link>
             <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            >
              <Settings className="h-4 w-4" />
              Cài đặt
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
           <Link
              href="/login"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-red-500 transition-all hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10"
            >
              <LogOut className="h-4 w-4" />
              Đăng xuất
            </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:pl-64 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white dark:bg-gray-950 px-6 shadow-sm">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
                <div className="relative hidden md:block w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Tìm kiếm..."
                        className="w-full bg-gray-50 pl-9 dark:bg-gray-900 rounded-xl"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative rounded-full">
                    <Bell className="h-5 w-5 text-gray-500" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                </Button>
                <div className="font-medium text-sm hidden sm:block">
                    Admin
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                    A
                </div>
            </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
            {children}
        </main>
      </div>
    </div>
  );
}
