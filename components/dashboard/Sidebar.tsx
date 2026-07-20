import Link from "next/link";
import {
  Sparkles,
  MapPinned,
  Calendar,
  Trophy,
  User,
  Building2,
} from "lucide-react";

const menu = [
  { icon: Sparkles, label: "AI Match", href: "#" },
  { icon: MapPinned, label: "Explore", href: "#" },
  { icon: Calendar, label: "Events", href: "#" },
  { icon: Trophy, label: "Passport", href: "#" },
  { icon: User, label: "Profile", href: "#" },
  { icon: Building2, label: "Organizations", href: "#" },
];

export default function Sidebar() {
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
              className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-emerald-50 hover:text-emerald-600"
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