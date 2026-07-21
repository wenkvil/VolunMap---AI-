import { Award } from "lucide-react";

export default function AchievementCard() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3">
        <Award className="text-yellow-500"/>
        <h2 className="text-2xl font-bold">
          Achievements
        </h2>
      </div>

      <div className="mt-8 space-y-4">

        <div className="rounded-xl bg-slate-50 p-4">
          🏅 100 Volunteer Hours
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          🌱 Eco Hero
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          ❤️ Community Leader
        </div>

      </div>
    </div>
  );
}