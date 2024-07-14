'use client'
import styles from "../public/page.module.scss";
import { getUserCS } from "nextfirejs/client/auth";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";

export default function Home() {
  const { currentUser } = getUserCS();

  useEffect(() => {
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
