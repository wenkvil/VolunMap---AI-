import { Plus } from "lucide-react";

export default function CreateEventCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-500 p-8 text-white shadow-xl">

      <h2 className="text-3xl font-black">
        Create New Event
      </h2>

      <p className="mt-3 opacity-90">
        Publish a volunteering opportunity and let AI match the best volunteers.
      </p>

      <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-700">
        <Plus size={20}/>
        Create Event
      </button>

    </div>
  );
}