export default function RecommendationCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-10 text-white shadow-xl">

      <p className="font-semibold">
        AI Recommendation
      </p>

      <h2 className="mt-3 text-4xl font-black">
        Tree Planting Festival
      </h2>

      <p className="mt-5 max-w-xl opacity-90">
        Based on your interests, skills and availability,
        our AI calculated a 98% compatibility score.
      </p>

      <button className="mt-8 rounded-2xl bg-[#ABC5DE] px-8 py-3 font-bold text-emerald-600">
        Join Event
      </button>

    </div>
  );
}