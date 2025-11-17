"use client";
import { GB, VN } from "country-flag-icons/react/3x2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Menu, X, Search, GlobeIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as React from "react";
import SQUARE_LOGO from "@/assets/logo/square_logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { NAVIGATION, FEATURE_CONTENT } from "./header-contents";
import {
  sinhVienItems,
  veHCMUTEItems,
  cbvcItems,
  daoTaoItems,
  nghienCuuItems,
  hopTacItems,
  tuyenSinhItems,
} from "./header-values";
import { Button } from "../ui/button";
import { Globe } from "../ui/globe";
import { NavDropdown } from "./nav-dropdown";
import { AreaDropdown } from "./area-dropdown";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0  left-0 right-0 z-[100]">
      <div
        className={`transition-all  py-2 duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
            : "bg-white shadow-md border-b border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between  h-16 relative">
          {/* Left Side Navigation */}
          <div className="flex justify-end items-center gap-4 w-full">
            <NavigationMenu>
              <NavigationMenuList>
                {NAVIGATION.left.map((nav) => (
                  <NavigationMenuItem key={nav.label}>
                    <NavDropdown
                      label={nav.label}
                      href={nav.href}
                      dropdown={nav.dropdown}
                    />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Center Logo - Absolutely centered */}
          <div className="px-8">
            <img
              src={"/logo/square_logo.png"}
              alt="HCMUTE Logo"
              className="w-40 transition-transform duration-300 hover:scale-100 "
            />
          </div>

          {/* Right Side Navigation */}
          <div className="flex justify-start items-center gap-4 w-full">
            <NavigationMenu>
              <NavigationMenuList>
                {NAVIGATION.right.map((nav) => (
                  <NavigationMenuItem key={nav.label}>
                    <NavDropdown
                      label={nav.label}
                      href={nav.href}
                      dropdown={nav.dropdown}
                    />
                  </NavigationMenuItem>
                ))}

                <div className="flex gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent relative">
                      {" "}
                      <Button
                        size={"icon"}
                        className="rounded-full absolute bg-white z-[999]"
                        variant="outline"
                      >
                        <GlobeIcon />
                      </Button>
                    </NavigationMenuTrigger>
                    <AreaDropdown />
                  </NavigationMenuItem>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button className="rounded-full" variant="outline">
                        <VN />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="!z-[999] rounded-xl"
                      align="end"
                      alignOffset={0}
                      sideOffset={5}
                    >
                      <DropdownMenuItem className="">
                        <VN /> VI
                      </DropdownMenuItem>
                      <DropdownMenuItem className="">
                        <GB /> EN
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
