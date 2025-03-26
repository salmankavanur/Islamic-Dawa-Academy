// src/app/ClientBody.tsx
"use client";

import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("antialiased");
  }, []);

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
