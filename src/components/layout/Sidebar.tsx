"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItem {
  title: string;
  href: string;
  isNew?: boolean;
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

const sidebarData: SidebarGroup[] = [
  {
    label: "Seções",
    items: [
      { title: "Início", href: "/" },
      { title: "Componentes", href: "/components" },
      { title: "CLI", href: "/cli" },
    ],
  },
  {
    label: "Guias de Uso",
    items: [
      { title: "Guia de Tema", href: "/components/tutorial-tema" },
      { title: "Guia de Charts", href: "/components/tutorial-charts" },
      { title: "Guia de Toast", href: "/components/sonner" },
    ],
  },
  {
    label: "Componentes",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Back to Top Button", href: "/components/back-to-top-button" },
      { title: "Badge", href: "/components/badge" },
      { title: "Button", href: "/components/button" },
      {
        title: "Calendar Input",
        href: "/components/calendar-input",
        isNew: true,
      },
      { title: "Card", href: "/components/card" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Dialog", href: "/components/dialog" },
      {
        title: "Dropdown Menu",
        href: "/components/dropdown-menu",
        isNew: true,
      },
      {
        title: "File Upload Area",
        href: "/components/file-upload-area",
        isNew: true,
      },
      { title: "Footer", href: "/components/footer" },
      { title: "Header", href: "/components/header" },
      { title: "Header Button", href: "/components/header-button" },
      { title: "Header Stats", href: "/components/header-stats" },
      { title: "Info Card", href: "/components/info-card" },
      { title: "Input", href: "/components/input" },
      { title: "Label", href: "/components/label" },
      { title: "Multi Select", href: "/components/multi-select", isNew: true },
      { title: "Nav Rail", href: "/components/nav-rail", isNew: true },
      { title: "Navigation", href: "/components/navigation" },
      { title: "Popover", href: "/components/popover", isNew: true },
      { title: "Scroll Area", href: "/components/scroll-area", isNew: true },
      { title: "Select", href: "/components/select" },
      { title: "Separator", href: "/components/separator", isNew: true },
      { title: "Skeleton", href: "/components/skeleton", isNew: true },
      { title: "Stat Card", href: "/components/stat-card", isNew: true },
      { title: "Status Badge", href: "/components/status-badge" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Textarea", href: "/components/textarea", isNew: true },
      { title: "Toggle", href: "/components/toggle", isNew: true },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div
        data-slot="sidebar-content"
        data-sidebar="content"
        className="flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden no-scrollbar overflow-x-hidden px-4 pb-10"
      >
        <div className="h-4 shrink-0"></div>

        {sidebarData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            data-slot="sidebar-group"
            data-sidebar="group"
            className="relative flex w-full min-w-0 flex-col p-2"
          >
            <div
              data-slot="sidebar-group-label"
              data-sidebar="group-label"
              className="ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 text-muted-foreground font-medium"
            >
              {group.label}
            </div>

            <div
              data-slot="sidebar-group-content"
              data-sidebar="group-content"
              className="w-full text-sm"
            >
              <ul
                data-slot="sidebar-menu"
                data-sidebar="menu"
                className={cn(
                  "flex w-full min-w-0 flex-col",
                  groupIndex === 0 ? "gap-1" : "gap-0.5"
                )}
              >
                {group.items.map((item, itemIndex) => {
                  const isActive = pathname === item.href;

                  return (
                    <li
                      key={itemIndex}
                      data-slot="sidebar-menu-item"
                      data-sidebar="menu-item"
                      className="group/menu-item relative"
                    >
                      <Link
                        href={item.href}
                        data-slot="sidebar-menu-button"
                        data-sidebar="menu-button"
                        data-size="default"
                        data-active={isActive}
                        className={cn(
                          "peer/menu-button flex items-center gap-2 rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          isActive &&
                            "bg-accent text-accent-foreground font-medium border-accent"
                        )}
                      >
                        <span className="absolute inset-0 flex w-full bg-transparent"></span>
                        {item.title}
                        {item.isNew && (
                          <span
                            className="flex size-2 rounded-full bg-blue-500"
                            title="New"
                          ></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
