const events = [
  {
    title: "Tree Planting Festival",
    volunteers: 126,
    status: "Open",
  },
  {
    title: "Blood Donation Day",
    volunteers: 84,
    status: "Open",
  },
  {
    title: "Animal Shelter Help",
    volunteers: 52,
    status: "Completed",
  },
];

export default function OrganizationEvents() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Your Events
      </h2>

      <div className="space-y-5">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex items-center justify-between rounded-2xl border p-5"
          >
            <div>
              <h3 className="font-bold">
                {event.title}
              </h3>

              <p className="text-slate-500">
                {event.volunteers} registered volunteers
              </p>
            </div>

            <span className="rounded-full bg-emerald-100 px-4 py-2 font-semibold text-emerald-700">
              {event.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}