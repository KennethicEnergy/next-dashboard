"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import styles from './main-layout.module.scss'
import { getUserCS } from "firebase-nextjs/client/auth";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const { currentUser } = getUserCS();
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

export default MainLayout;
