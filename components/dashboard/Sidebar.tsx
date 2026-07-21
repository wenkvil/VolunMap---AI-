"use client";

import Link from "next/link";
import {
  Sparkles,
  MapPinned,
  Calendar,
  Trophy,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  {
    icon: MapPinned,
    label: "Dashboard",
    href: "/volunteer",
  },
  {
    icon: Sparkles,
    label: "AI Match",
    href: "/volunteer/ai-match",
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/volunteer/events",
  },
  {
    icon: Trophy,
    label: "Passport",
    href: "/volunteer/passport",
  },
  {
    icon: User,
    label: "Profile",
    href: "/volunteer/profile",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen border-r bg-white p-8">
      <h1 className="text-3xl font-black text-emerald-600">
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
                  ? "bg-emerald-600 text-white shadow-md font-semibold"
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