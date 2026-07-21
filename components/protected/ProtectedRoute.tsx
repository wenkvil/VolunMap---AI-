"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, role, loading } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (
      pathname.startsWith("/organization") &&
      role !== "organization"
    ) {
      router.replace("/volunteer");
      return;
    }

    if (
      pathname.startsWith("/volunteer") &&
      role !== "volunteer"
    ) {
      router.replace("/organization");
      return;
    }
  }, [loading, user, role, pathname, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}