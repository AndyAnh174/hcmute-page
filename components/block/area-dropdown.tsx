"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { AREA_GROUPS, AreaGroup } from "./area-data";
import { Separator } from "../ui/separator";

export function AreaDropdown() {
  const [selectedGroup, setSelectedGroup] = useState<AreaGroup>(AREA_GROUPS[0]);

  return (
    <NavigationMenuContent>
      <div className="flex gap-1 p-8 w-[min(600px,85vw)]">
        {/* Left Side - Faculty/Area Items */}
        <div className=" min-w-0 w-full">
          <h4 className="uppercase font-bold mb-4 text-base text-gray-900">
            {selectedGroup.title}
          </h4>
          <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {selectedGroup.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group/item relative block rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-base font-medium flex items-center gap-2">
                        {item.name}
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity text-blue-600 mt-0.5" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Side - Group Filters */}
        <div className="w-48 flex-shrink-0 pl-6">
          <h4 className="uppercase font-bold mb-4 text-sm text-gray-900">
            Danh mục
          </h4>
          <ul className="space-y-1">
            {AREA_GROUPS.map((group) => (
              <li key={group.title}>
                <button
                  onClick={() => setSelectedGroup(group)}
                  className={`w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    selectedGroup.title === group.title
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {group.title}
                  <span
                    className={`ml-2 text-xs ${
                      selectedGroup.title === group.title
                        ? "text-blue-100"
                        : "text-gray-400"
                    }`}
                  >
                    ({group.items.length})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavigationMenuContent>
  );
}
