"use client";

import Link from "next/link";
import { Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          VolunMap AI
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href="#">Discover</Link>
          <Link href="#">Organizations</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Bell size={20} />
          </button>

          <button className="rounded-full p-2 hover:bg-gray-100 md:hidden">
            <Menu size={22} />
          </button>

          <button className="hidden md:block rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700">
            <Link
             href="/role-select"
             className="hidden rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700 md:block"
            >
             Get Started
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}