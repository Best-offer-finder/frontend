"use client";

import { useSession } from "next-auth/react";

export function ClientExample() {
  const { data: session, status } = useSession();

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
    </>
  );
}
