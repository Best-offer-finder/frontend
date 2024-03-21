import { ClientExample } from "./ClientExample";
import { SignInButton, SignOutButton } from "./authButtons";
import { auth } from "@/src/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {!session && <SignInButton />}

      {session && <SignOutButton />}

      <ClientExample />
    </>
  );
}
