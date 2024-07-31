"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import styles from './main-layout.module.scss';
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import useUserAccountStore from "@/store/accountStore";
import { getUserCS } from "firebase-nextjs/client/auth";
import { transformToFirebaseCredentials } from "@/services/helpers";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User } from 'firebase/auth';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const currentUser = getUserCS();
  const userInfo = useUserAccountStore((state) => state.userInfo);
  const setUserInfo = useUserAccountStore((state) => state.setUserInfo);
  const [showRoleSelectorWindow, setShowRoleSelectorWindow] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (currentUser !== null) {
      const firebaseCredentials = transformToFirebaseCredentials(currentUser);
      setUserInfo({ firebaseCredentials });
      if (userInfo.role === '') {
        setShowRoleSelectorWindow(true);
      }
    }
  }, [currentUser]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
    setUserInfo({ role: selectedRole });
  };

  const handleProceed = () => {
    if (selectedRole !== '') {
      setShowRoleSelectorWindow(false);
      router.push('/dashboard');
    }
  };

  const renderContent = () => {
    return showRoleSelectorWindow ?
      <div>
        What is your role?
        <div className={styles.options}>
          <span><input type="checkbox" value="TENANT" onChange={handleChange} /> Tenant</span>
          <span><input type="checkbox" value="LANDLORD" onChange={handleChange} /> Landlord</span>
          <span><input type="checkbox" value="SERVICEPRO" onChange={handleChange} /> Service Provider</span>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} className={styles.proceed} onClick={handleProceed}>Proceed</motion.button>
      </div>
      :
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.contents}>
          <Header />
          <BreadCrumbs />
          {children}
        </div>
      </div>
  };

  return (
    renderContent()
  );
};

export default MainLayout;
