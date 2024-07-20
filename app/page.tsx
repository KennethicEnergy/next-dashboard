"use client"
import { getUserCS } from "firebase-nextjs/client/auth";
import { useEffect } from "react";
import Dashboard from "./(pages)/dashboard/page";

const Home = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const currentUser = getUserCS();

  useEffect(() => {
  }, [])

  return (
    <Dashboard/>
  );
}

export default Home;