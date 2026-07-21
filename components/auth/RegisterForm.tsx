"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

import { doc, setDoc } from "firebase/firestore";

export default function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultRole =
    searchParams.get("role") === "organization"
      ? "organization"
      : "volunteer";

  const [role] = useState<"volunteer" | "organization">(defaultRole);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        role,
        createdAt: new Date(),
      });

      router.push(
        role === "organization"
          ? "/organization"
          : "/volunteer"
      );
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleRegister}
      className="mx-auto mt-20 max-w-md rounded-3xl bg-white p-8 shadow-xl"
    >
      <h1 className="mb-8 text-3xl font-black">
        Create Account
      </h1>

      <div className="space-y-4">

        <div
          className={`rounded-xl border p-3 text-center font-bold ${
            role === "organization"
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-emerald-500 bg-emerald-50 text-emerald-700"
          }`}
        >
          Registering as{" "}
          {role === "organization"
            ? "Organization"
            : "Volunteer"}
        </div>

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className={`w-full rounded-xl py-3 font-bold text-white transition disabled:opacity-50 ${
            role === "organization"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600">
          <span>Already have an account?</span>

          <Link
            href={`/login?role=${role}`}
            className={`rounded-lg px-3 py-2 font-semibold transition ${
              role === "organization"
                ? "text-blue-600 hover:bg-blue-50"
                : "text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            Login
          </Link>
        </div>

      </div>
    </form>
  );
}