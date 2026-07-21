import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AIMatchCard() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">
        <Sparkles className="text-emerald-600" size={34}/>
        <h1 className="text-3xl font-black">
          AI Compatibility Analysis
        </h1>
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-8 text-white">

        <p className="text-lg">
          Your Match Score
        </p>

        <h2 className="mt-3 text-7xl font-black">
          98%
        </h2>

      </div>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-5">
          <CheckCircle2 className="text-emerald-600"/>
          Leadership experience matches organizer requirements.
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-5">
          <CheckCircle2 className="text-emerald-600"/>
          Environmental volunteering matches your interests.
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-5">
          <CheckCircle2 className="text-emerald-600"/>
          Event schedule fits your availability.
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-5">
          <CheckCircle2 className="text-emerald-600"/>
          Distance is less than 5 km from your location.
        </div>

      </div>

      <button className="mt-10 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white hover:bg-emerald-700 transition">
        Join this Event
      </button>

    </div>
  );
}