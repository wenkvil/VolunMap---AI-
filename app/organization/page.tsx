import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import OrganizationStats from "@/components/organization/OrganizationStats";
import CreateEventCard from "@/components/organization/CreateEventCard";
import OrganizationEvents from "@/components/organization/OrganizationEvents";
import AIEventCreator from "@/components/organization/AIEventCreator";
import CreateEventForm from "@/components/organization/CreateEventForm";

export default function OrganizationDashboard() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        <OrganizationStats />

        <div className="mt-10">
          <CreateEventForm />
        </div>
        
        <div className="mt-10">
          <CreateEventCard />
        </div>

        <div className="mt-10">
            <AIEventCreator />
        </div>

        <div className="mt-10">
          <OrganizationEvents />
        </div>
      </section>
    </main>
  );
}