import { signIn, signOut } from "@/src/auth";

export function SignInButton() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button>Sign In</button>
      </form>
    </>
  );
}

export function SignOutButton() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign Out</button>
      </form>
    </>
  );
}
