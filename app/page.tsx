'use client'
import styles from "./page.module.scss";
import { getUserCS } from "nextfirejs/client/auth";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

export default function Home() {
  const { currentUser } = getUserCS();

  useEffect(() => {
    console.log(currentUser);
  }, [])

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.contents}>
        <Header />

      </div>
    </main>
  );
}
