import StatCard from "../dashboard/Statcard";

export default function OrganizationStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Events"
        value="18"
        color="text-emerald-600"
      />

      <StatCard
        title="Volunteers"
        value="742"
        color="text-blue-600"
      />

      <StatCard
        title="Hours"
        value="3.2K"
        color="text-cyan-600"
      />

      <StatCard
        title="Certificates"
        value="621"
        color="text-emerald-600"
      />
    </div>
  );
}