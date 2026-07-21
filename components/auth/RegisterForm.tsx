"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

import { doc, setDoc } from "firebase/firestore";

import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState<"volunteer" | "organization">(
    "volunteer"
  );

  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
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

      if (role === "volunteer") {
        router.push("/volunteer");
      } else {
        router.push("/organization");
      }
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

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full rounded-xl border p-3"
          value={role}
          onChange={(e) =>
            setRole(
              e.target.value as
                | "volunteer"
                | "organization"
            )
          }
        >
          <option value="volunteer">
            Volunteer
          </option>

          <option value="organization">
            Organization
          </option>
        </select>

        <button
          disabled={loading}
          className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600">
            <span>Already have an account?</span>
            <Link
            href="/login"
            className="rounded-lg px-3 py-2 font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
            Login
        </Link>
        </div>

      </div>
    </form>
  );
}