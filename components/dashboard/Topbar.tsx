import { Bell } from "lucide-react";

export default function Topbar() {
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

      <button className="rounded-full bg-white p-3 shadow">
        <Bell />
      </button>
    </header>
  );
}