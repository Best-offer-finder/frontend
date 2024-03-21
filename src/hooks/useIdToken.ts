import { useSession } from "next-auth/react";

export function useIdToken(): string | null {
  const { data, status } = useSession();

  if (status !== "authenticated") return null;
  if (!("id_token" in data)) return null;
  if (typeof data.id_token !== "string") return null;

  return data.id_token;
}
