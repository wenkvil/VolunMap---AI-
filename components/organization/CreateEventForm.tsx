"use client";

import { useState } from "react";

export default function CreateEventForm() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-black">
        Create New Event
      </h2>

      <div className="mt-6 space-y-4">

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700">
          Create Event
        </button>

      </div>
    </div>
  );
}