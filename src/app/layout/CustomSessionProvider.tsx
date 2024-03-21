import { auth } from "@/src/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function CustomSessionProvider({ children }: Props) {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
