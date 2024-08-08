import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/globals.css";

import { FirebaseNextJSProvider } from "firebase-nextjs/client/auth";
import { getUserSS } from "firebase-nextjs/server/auth";
import MainLayout from "@/components/main-layout/main-layout";
// import { getAppSS } from "firebase-nextjs/server/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getUserSS();
  // const app = await getAppSS();
  // const firestore = app.firestore();
  // const myDoc = await firestore.collection("users").doc("bCJK6h60Z719Zdx9bQEy").get();

  return (
    <html lang="en">
      <FirebaseNextJSProvider>
        <body className={inter.className}>
          <>{user?.uid ? <MainLayout>{children}</MainLayout> : children}</>
        </body>
      </FirebaseNextJSProvider>
    </html>
  );
}