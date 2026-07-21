"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
};

const DEFAULT_POSITION: [number, number] = [49.806, 73.085];

export default function MapCard() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "events"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Event, "id">),
        }));

        setEvents(data);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="flex items-center justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold">
            Nearby Opportunities
          </h3>

          <p className="text-slate-500">
            Live events from Firestore
          </p>
        </div>
      </div>

      <div className="h-[420px]">
        <MapContainer
          center={DEFAULT_POSITION}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {events.map((event) => (
            <Marker
              key={event.id}
              position={[
                (event as any).latitude ?? DEFAULT_POSITION[0],
                (event as any).longitude ?? DEFAULT_POSITION[1],
              ]}
            >
              <Popup>
                <strong>{event.title}</strong>
                <br />
                {event.location}
                <br />
                {event.date}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}