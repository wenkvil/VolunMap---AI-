import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/Statcard";
import RecommendationCard from "@/components/dashboard/Recommendationcard";
import MapCard from "@/components/dashboard/Mapcard";
import PassportCard from "@/components/dashboard/Passportcard";
import UpcomingEvents from "@/components/dashboard/Upcomingevents";

export default function VolunteerDashboard() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Volunteer Hours"
            value="124"
            color="text-emerald-600"
          />

          <StatCard
            title="Certificates"
            value="15"
            color="text-blue-600"
          />

          <StatCard
            title="Badges"
            value="8"
            color="text-cyan-600"
          />

          <StatCard
            title="AI Match"
            value="98%"
            color="text-emerald-600"
          />
        </div>

        <div className="mt-10">
          <RecommendationCard />
        </div>
        
        <div className="mt-10">
            <MapCard />
        </div>

        <div className="mt-10">
            <PassportCard />
        </div>

        <div className="mt-10">
            <UpcomingEvents />
        </div>
      </section>
    </main>
  );
}