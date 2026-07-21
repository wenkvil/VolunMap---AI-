"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

import { doc, getDoc } from "firebase/firestore";

type Role = "volunteer" | "organization" | null;

type AuthContextType = {
  user: User | null;
  role: Role;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        setUser(firebaseUser);

        if (firebaseUser) {
          const snap = await getDoc(
            doc(db, "users", firebaseUser.uid)
          );

          if (snap.exists()) {
            setRole(
              snap.data().role as "volunteer" | "organization"
            );
          }
        } else {
          setRole(null);
        }

        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}