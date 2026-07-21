"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [role, setRole] =useState<"volunteer" | "organization">("volunteer");

  return (
    <div className="mx-auto mt-16 max-w-lg rounded-3xl bg-white p-8 shadow-xl">
      <h1 className="text-3xl font-black">Create Account</h1>

      <div className="mt-6 space-y-4">

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Full Name"
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Email"
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Password"
          type="password"
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value as "volunteer" | "organization")
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="volunteer">Volunteer</option>
          <option value="organization">Organization</option>
        </select>

        <button className="w-full rounded-xl bg-emerald-600 p-3 font-bold text-white">
          Create Account
        </button>

      </div>
    </div>
  );
}