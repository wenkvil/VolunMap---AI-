import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ProfileCard from "@/components/profile/ProfileCard";
import SkillsCard from "@/components/profile/SkillsCard";
import AchievementCard from "@/components/profile/AchievementCard";

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen bg-[#E9ECF1]">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        <div className="grid gap-8 xl:grid-cols-3">
          <ProfileCard />
          <SkillsCard />
          <AchievementCard />
        </div>
      </section>
    </main>
  );
}