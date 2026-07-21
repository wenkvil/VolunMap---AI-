"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconDefault = L.Icon.Default.prototype as L.Icon.Default & {
  _getIconUrl?: unknown;
};

delete iconDefault._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const events = [
  {
    id: 1,
    title: "Tree Planting Festival",
    position: [49.806, 73.085] as [number, number],
    match: "98%",
  },
  {
    id: 2,
    title: "Blood Donation Day",
    position: [49.81, 73.1] as [number, number],
    match: "95%",
  },
  {
    id: 3,
    title: "Animal Shelter Support",
    position: [49.798, 73.075] as [number, number],
    match: "92%",
  },
];

export default function MapCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="flex items-center justify-between border-b p-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Nearby Opportunities
          </h2>

          <p className="text-slate-500">
            AI-ranked volunteer events near you
          </p>
        </div>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          Live Map
        </span>
      </div>

      <MapContainer
        center={[49.806, 73.085]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "450px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.map((event) => (
          <Marker key={event.id} position={event.position}>
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold">{event.title}</h3>

                <p className="text-sm text-emerald-600">
                  🤖 AI Match: {event.match}
                </p>

                <button className="mt-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white">
                  Register
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}