"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CalendarDays,
  PlusCircle,
  Users,
  ChartColumn,
  Settings,
} from "lucide-react";

export default function OrganizationSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r p-6">

      <h1 className="text-5xl font-black text-blue-600">
        VolunMap AI
      </h1>

      <nav className="mt-16 space-y-5">

        <Link
          href="/organization"
          className="flex items-center gap-4 rounded-2xl bg-blue-600 px-5 py-4 font-semibold text-white"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          href="/organization/events"
          className="flex items-center gap-4 px-5 py-4 text-slate-600 hover:text-blue-600"
        >
          <CalendarDays />
          My Events
        </Link>

        <Link
          href="/organization/create"
          className="flex items-center gap-4 px-5 py-4 text-slate-600 hover:text-blue-600"
        >
          <PlusCircle />
          Create Event
        </Link>

        <Link
          href="/organization/volunteers"
          className="flex items-center gap-4 px-5 py-4 text-slate-600 hover:text-blue-600"
        >
          <Users />
          Volunteers
        </Link>

        <Link
          href="/organization/analytics"
          className="flex items-center gap-4 px-5 py-4 text-slate-600 hover:text-blue-600"
        >
          <ChartColumn />
          Analytics
        </Link>

        <Link
          href="/organization/settings"
          className="flex items-center gap-4 px-5 py-4 text-slate-600 hover:text-blue-600"
        >
          <Settings />
          Settings
        </Link>

      </nav>
    </aside>
  );
}