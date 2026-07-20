import { Sparkles } from "lucide-react";

export default function AIEventCreator() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="text-emerald-600" size={28} />
        <h2 className="text-2xl font-bold">AI Event Generator</h2>
      </div>

      <p className="mb-6 text-slate-500">
        Describe your volunteering activity and AI will generate a professional
        event description.
      </p>

      <textarea
        rows={5}
        placeholder="Example: We are organizing a city clean-up for 50 volunteers next Saturday..."
        className="w-full rounded-2xl border p-4 outline-none focus:border-emerald-500"
      />

      <button className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
        Generate with AI
      </button>
    </div>
  );
}