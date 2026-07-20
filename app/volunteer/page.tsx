import {
  Bell,
  MapPinned,
  Sparkles,
  Trophy,
  Calendar,
  User,
} from "lucide-react";

export default function VolunteerDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="flex">

        {/* Sidebar */}

        <aside className="w-72 bg-white shadow-xl min-h-screen p-8">

          <h1 className="text-3xl font-black text-emerald-600">
            VolunMap AI
          </h1>

          <div className="mt-12 space-y-5">

            <button className="flex items-center gap-3 text-emerald-600 font-semibold">
              <Sparkles />
              AI Match
            </button>

            <button className="flex items-center gap-3">
              <MapPinned />
              Explore
            </button>

            <button className="flex items-center gap-3">
              <Calendar />
              Events
            </button>

            <button className="flex items-center gap-3">
              <Trophy />
              Passport
            </button>

            <button className="flex items-center gap-3">
              <User />
              Profile
            </button>

          </div>

        </aside>

        {/* Main */}

        <section className="flex-1 p-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-5xl font-black">
                Hello, Adil 👋
              </h2>

              <p className="mt-2 text-slate-500">
                AI found new opportunities for you.
              </p>

            </div>

            <Bell size={28} />

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-4xl font-black text-emerald-600">
                124
              </h2>

              <p className="mt-2 text-slate-500">
                Volunteer Hours
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-4xl font-black text-blue-600">
                15
              </h2>

              <p className="mt-2 text-slate-500">
                Certificates
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-4xl font-black text-cyan-600">
                8
              </h2>

              <p className="mt-2 text-slate-500">
                Badges
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-4xl font-black text-emerald-600">
                98%
              </h2>

              <p className="mt-2 text-slate-500">
                AI Match
              </p>

            </div>

          </div>

          {/* AI Recommendation */}

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-10 text-white">

            <p className="font-semibold">
              AI Recommendation
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Tree Planting Festival
            </h2>

            <p className="mt-4 text-lg opacity-90">
              Based on your interests, experience and schedule,
              this event has a 98% compatibility score.
            </p>

            <button className="mt-8 rounded-2xl bg-white px-8 py-3 font-bold text-emerald-600">
              Join Event
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}