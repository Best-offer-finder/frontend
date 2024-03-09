import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "../auth";
import { SessionProvider } from "next-auth/react";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Next Auth Google Provider */}
        <script
          defer
          src="https://www.gstatic.com/firebasejs/8.0/firebase.js"
        ></script>
        <script defer src="/static/google-provider.js"></script>

        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
