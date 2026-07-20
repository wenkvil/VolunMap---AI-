"use client";

import { Sparkles, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-20 w-full max-w-md rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-[0_30px_80px_rgba(16,185,129,0.18)] backdrop-blur-xl transition hover:-translate-y-2"
    >
      <div className="flex items-center gap-2 text-emerald-600 font-semibold">
        <Sparkles size={18} />
        AI Recommendation
      </div>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        Tree Planting Festival
      </h2>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold">
          98% Match
        </span>

        <span className="text-sm text-slate-500">
          Verified Organization
        </span>
      </div>

      <div className="mt-6 space-y-3 text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          Karaganda Central Park
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          Saturday • 10:00 AM
        </div>
      </div>

      <button className="mt-8 w-full rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
        Join Event
      </button>
    </motion.div>
  );
}