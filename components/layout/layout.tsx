"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import styles from "../public/layout.module.scss";
import { getUserCS } from "firebase-nextjs/client/auth";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const { currentUser } = getUserCS();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

	const renderUserLayout = () => {
    return (
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.contents}>
          <Header />
          {children}
        </div>
      </div>
    );
	};

	return <>{currentUser ? renderUserLayout() : children}</>;
};

export default MainLayout;
