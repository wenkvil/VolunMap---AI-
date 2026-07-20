import { Building2, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function RoleSelect() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-5xl">

        <h1 className="text-center text-5xl font-black">
          Choose your role
        </h1>

        <p className="mt-4 text-center text-slate-500">
          Join VolunMap AI as a volunteer or an organization.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <Link
            href="/volunteer"
            className="rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2"
          >
            <HeartHandshake
              className="text-emerald-600"
              size={60}
            />

            <h2 className="mt-8 text-3xl font-bold">
              Volunteer
            </h2>

            <p className="mt-4 text-slate-500">
              Find AI-powered volunteering opportunities.
            </p>

          </Link>

          <Link
            href="/organization"
            className="rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2"
          >
            <Building2
              className="text-blue-600"
              size={60}
            />

            <h2 className="mt-8 text-3xl font-bold">
              Organization
            </h2>

            <p className="mt-4 text-slate-500">
              Create events and manage volunteers.
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}