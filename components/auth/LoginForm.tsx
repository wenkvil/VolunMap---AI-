"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = credential.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));

      if (!userDoc.exists()) {
        alert("User profile not found.");
        return;
      }

      const data = userDoc.data();

      if (data.role === "organization") {
        router.push("/organization");
      } else {
        router.push("/volunteer");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="mx-auto mt-20 max-w-md rounded-3xl bg-white p-8 shadow-xl"
    >
      <h1 className="mb-8 text-3xl font-black">
        Login
      </h1>

      <div className="space-y-4">

        <input
          className="w-full rounded-xl border p-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
        
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600">
          <span>Do not have an account?</span>
          <Link
          href="/register"
          className="rounded-lg px-3 py-2 font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            Register
            </Link>
            </div>
      </div>
    </form>
  );
}