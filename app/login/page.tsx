"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-[1.8fr_1fr]">
      {/* Left Side: Image (Hidden on mobile) */}
      <div className="hidden lg:block relative h-full w-full bg-gray-900">
        <Image
          src="/background/login_left.png"
          alt="University Campus"
          fill
          className="object-cover opacity-80"
          style={{ objectPosition: "calc(50% - 1rem) center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-10 p-6 text-white max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-nowrap">
            Trường Đại học Sư phạm Kỹ thuật TP.HCM
          </h2>
          <p className="text-gray-200 text-lg font-medium">
            NHÂN BẢN - SÁNG TẠO - HỘI NHẬP
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center py-12 px-6 lg:px-20 bg-white dark:bg-gray-950">
        <div className="mx-auto grid w-full max-w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo/square_logo.png"
                alt="HCMUTE Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Đăng nhập
            </h1>
            <p className="text-balance text-muted-foreground">
              Chào mừng bạn quay trở lại!
            </p>
          </div>

          <div className="grid gap-4">
            <Link href="/admin" className="w-full">
              <Button
                variant="outline"
                className="w-full h-11 rounded-xl gap-2 font-medium border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="w-5 h-5"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Tiếp tục với Google
              </Button>
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-950 px-2 text-muted-foreground">
                  Hoặc đăng nhập bằng mã số
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="mssv">Mã số</Label>
              <Input
                id="mssv"
                type="text"
                placeholder="Nhập mã số sinh viên"
                required
                className="h-11 rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mật khẩu</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm text-blue-600 underline-offset-4 hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="h-11 rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-11 rounded-xl text-base font-medium bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-900/20 mt-2"
            >
              Đăng nhập
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Bạn chưa có tài khoản?{" "}
            <Link
              href="#"
              className="underline text-blue-600 hover:text-blue-500"
            >
              Đăng ký ngay
            </Link>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trường Đại học Sư phạm Kỹ thuật TP.HCM
            <div className="mt-1 gap-4 flex justify-center">
              <Link
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                Điều khoản
              </Link>
              <Link
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                Bảo mật
              </Link>
              <Link
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                Trợ giúp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
