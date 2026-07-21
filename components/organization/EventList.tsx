"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
};

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Event, "id">),
      }));

      setEvents(data);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-3xl font-black">
        Your Events
      </h2>

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-slate-500">
            No events yet.
          </p>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border p-5"
            >
              <h3 className="text-xl font-bold">
                {event.title}
              </h3>

              <p className="text-slate-500">
                📍 {event.location}
              </p>

              <p className="text-slate-500">
                📅 {event.date}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}