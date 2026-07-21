import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const events = [
  {
    id: 1,
    title: "Tree Planting Festival",
    date: "Tomorrow • 10:00",
    location: "Central Park",
    match: "98%",
  },
  {
    id: 2,
    title: "Food Bank Support",
    date: "Friday • 14:00",
    location: "Karaganda Food Center",
    match: "94%",
  },
  {
    id: 3,
    title: "Animal Shelter Help",
    date: "Saturday • 11:00",
    location: "Happy Pets Shelter",
    match: "91%",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <p className="text-slate-500">
            Recommended volunteering opportunities
          </p>
        </div>

        <CalendarDays className="text-slate-800" size={32} />
      </div>

      <div className="space-y-5">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between rounded-2xl border p-5 transition hover:border-emerald-300 hover:shadow-md"
          >
            <div>
              <h3 className="text-lg font-bold">{event.title}</h3>

              <div className="mt-2 flex items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <CalendarDays size={15} />
                  {event.date}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  {event.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles className="mr-1 inline" size={15} />
                {event.match}
              </div>

              <button className="rounded-xl bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}