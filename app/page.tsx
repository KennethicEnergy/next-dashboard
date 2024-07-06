'use client'
import styles from "./page.module.scss";
import { ProfileButton } from "nextfirejs/client/components";
import { getUserCS } from "nextfirejs/client/auth";
import { useEffect } from "react";

export default function Home() {
  const { currentUser } = getUserCS();

  useEffect(() => {
    console.log(currentUser);
  }, [])

  return (
    <main className={styles.main}>
      <ProfileButton/>
    </main>
  );
}
