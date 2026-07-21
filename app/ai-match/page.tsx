import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import AIMatchCard from "@/components/ai/AIMatchCard";

export default function AIMatchPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        <AIMatchCard />
      </section>
    </main>
  );
}