import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FEATURE_CONTENT } from "./header-contents";
import { ArrowUpRight } from "lucide-react";

type DropdownColumn = {
  title: string;
  items: Array<{
    title: string;
    href: string;
    description?: string;
    bold?: boolean;
  }>;
};

type NavDropdownProps = {
  label: string;
  href: string;
  dropdown?: {
    columns: DropdownColumn[];
  };
};

export function NavDropdown({ label, href, dropdown }: NavDropdownProps) {
  // If no dropdown, render as a simple link
  if (!dropdown) {
    return (
      <>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
          href={href}
        >
          {label}
        </NavigationMenuLink>
      </>
    );
  }

  const hasFeatureContent = FEATURE_CONTENT[label];

  return (
    <>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div
          className={`flex gap-6 p-8 ${
            hasFeatureContent ? "w-[min(850px,90vw)]" : "w-[min(650px,85vw)]"
          }`}
        >
          {/* Columns Section */}
          <div
            className="grid gap-6 flex-1 min-w-0"
            style={{
              gridTemplateColumns: `repeat(${dropdown.columns.length}, minmax(0, 1fr))`,
            }}
          >
            {dropdown.columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h4 className="uppercase font-bold mb-4 text-base text-gray-900">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="group/item relative block rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div
                              className={`text-base ${
                                item.bold ? "font-semibold" : "font-medium"
                              }`}
                            >
                              {item.title}
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
            ))}
          </div>

          {/* Featured Image Section */}
          {hasFeatureContent && (
            <div className="w-72 flex-shrink-0 hidden lg:block">
              <a href={FEATURE_CONTENT[label].href} className="block group">
                <div className="relative rounded-lg overflow-hidden mb-3 h-40">
                  <Image
                    src={FEATURE_CONTENT[label].image || "/carousel/1.jpg"}
                    alt={FEATURE_CONTENT[label].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                    {FEATURE_CONTENT[label].badge}
                  </span>
                  <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                    {FEATURE_CONTENT[label].title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {FEATURE_CONTENT[label].description}
                  </p>
                  <span className="text-xs text-blue-600 font-medium group-hover:underline">
                    {FEATURE_CONTENT[label].cta} →
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </NavigationMenuContent>
    </>
  );
}
