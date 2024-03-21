"use client";

import { useIdToken } from "@/src/hooks/useIdToken";
import { useSession } from "next-auth/react";

export function ClientExample() {
  const { data: session, status } = useSession();
  const idToken = useIdToken();

  return (
    <>
      {status === "unauthenticated" && <>Niezalogowany</>}
      {status === "authenticated" && <>Zalogowany</>}
      {status === "loading" && <p>Loading...</p>}
      <br />
      <br />
      Session Status: {status}
      <br />
      <br />
      Session:
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button
        onClick={() => {
          console.log("Klicked");
          fetch("http://localhost:3000", {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          });
        }}
      >
        KLICK
      </button>
    </>
  );
}
