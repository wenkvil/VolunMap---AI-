import { Building2, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function RoleSelect() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-center text-5xl font-black">
          Choose your role
        </h1>

        <p className="mt-4 text-center text-slate-500">
          Join VolunMap AI as a volunteer or an organization.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Volunteer */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">
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

            <div className="mt-8 space-y-3">
              <Link
                href="/login?role=volunteer"
                className="block rounded-xl bg-emerald-600 py-3 text-center font-bold text-white transition hover:bg-emerald-700"
              >
                Login
              </Link>

              <Link
                href="/register?role=volunteer"
                className="block rounded-xl border-2 border-emerald-600 py-3 text-center font-bold text-emerald-600 transition hover:bg-emerald-50"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Organization */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">
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

            <div className="mt-8 space-y-3">
              <Link
                href="/login?role=organization"
                className="block rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Login
              </Link>

              <Link
                href="/register?role=organization"
                className="block rounded-xl border-2 border-blue-600 py-3 text-center font-bold text-blue-600 transition hover:bg-blue-50"
              >
                Register
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}