"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  PlusCircle,
  Users,
  ChartColumn,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/organization",
  },
  {
    icon: CalendarDays,
    label: "My Events",
    href: "/organization/events",
  },
  {
    icon: PlusCircle,
    label: "Create Event",
    href: "/organization/create",
  },
  {
    icon: Users,
    label: "Volunteers",
    href: "/organization/volunteers",
  },
  {
    icon: ChartColumn,
    label: "Analytics",
    href: "/organization/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/organization/settings",
  },
];

export default function OrganizationSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen border-r bg-white p-8">
      <h1 className="text-3xl font-black text-blue-600">
        VolunMap AI
      </h1>

      <nav className="mt-12 space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-md font-semibold"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}