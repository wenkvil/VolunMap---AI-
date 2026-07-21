"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function CreateEventForm() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [latitude, setLatitude] = useState(49.806);
  const [longitude, setLongitude] = useState(73.085);

  async function handleCreate() {
  if (!title || !location || !date) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "events"), {
        title,
        location,
        date,
        latitude,
        longitude,
        createdAt: serverTimestamp(),
    });

    setTitle("");
    setLocation("");
    setDate("");

    alert("Event created successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to create event.");
  }
}

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

        <div className="grid grid-cols-2 gap-4">

        <input
         className="rounded-xl border p-3"
         type="number"
         step="0.000001"
         placeholder="Latitude"
         value={latitude}
         onChange={(e) =>
        setLatitude(Number(e.target.value))
        }
        />

        <input 
         className="rounded-xl border p-3"
         type="number"
         step="0.000001"
         placeholder="Longitude"
         value={longitude}
         onChange={(e) =>
        setLongitude(Number(e.target.value))
        }
        />

</div>
        <input
          className="w-full rounded-xl border p-3"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button 
          onClick={handleCreate}
          className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700"
       >
        Create Event
        </button>

      </div>
    </div>
  );
}