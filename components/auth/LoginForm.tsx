"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/volunteer");
    } catch (err) {
      alert("Incorrect email or password.");
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="mx-auto mt-20 flex max-w-md flex-col gap-4 rounded-3xl bg-white p-8 shadow-xl"
    >
      <h1 className="text-3xl font-black">Login</h1>

      <input
        className="rounded-xl border p-3"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="rounded-xl border p-3"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="rounded-xl bg-emerald-600 p-3 font-bold text-white hover:bg-emerald-700"
      >
        Login
      </button>
    </form>
  );
}