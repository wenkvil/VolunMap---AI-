"use client";

import { Bell, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  return (
    <header className="mb-10 flex items-center justify-between">
      <div>
        <h2 className="text-5xl font-black">
          Welcome back 👋
        </h2>

        <p className="mt-2 text-slate-500">
          AI found new opportunities for you today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-full bg-white p-3 shadow">
          <Bell />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </header>
  );
}