"use client";

import Link from "next/link";
import {
  Sparkles,
  MapPinned,
  Calendar,
  Trophy,
  User,
  Building2,
} from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  { icon: MapPinned, label: "Dashboard", href: "/volunteer" },
  { icon: Sparkles, label: "AI Match", href: "/ai-match" },
  { icon: Calendar, label: "Events", href: "/volunteer" },
  { icon: Trophy, label: "Passport", href: "/volunteer" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Building2, label: "Organizations", href: "/organization" },
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

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-300
                ${
                    pathname === item.href
                    ? "bg-emerald-600 text-slate-900 shadow-md font-semibold"
                    : "hover:bg-slate-100 text-slate-600"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}