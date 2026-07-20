import {
  Brain,
  MapPinned,
  BadgeCheck,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Matching",
    text: "Find volunteer opportunities perfectly matched to your interests.",
  },
  {
    icon: MapPinned,
    title: "Interactive Map",
    text: "Explore verified volunteering events around your city.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Organizations",
    text: "Join only trusted NGOs, universities and foundations.",
  },
  {
    icon: Trophy,
    title: "Volunteer Passport",
    text: "Track your hours, certificates and achievements in one place.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold text-slate-900">
        Everything you need to volunteer smarter
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                <Icon className="text-emerald-600" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}