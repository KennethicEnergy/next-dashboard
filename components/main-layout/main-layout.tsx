"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import styles from './main-layout.module.scss';
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import useUserAccountStore from "@/store/accountStore";
import { getUserCS } from "firebase-nextjs/client/auth";
import { motion } from "framer-motion";
import { FirebaseNextJSContextType } from "@/services/types";
import RoleSelection from "../role-selection/role-selection";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const currentUser: FirebaseNextJSContextType = getUserCS();
  const { role, userInfo, setUserInfo, setRole} = useUserAccountStore();
  const [showRoleSelectorWindow, setShowRoleSelectorWindow] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleChange = (value: string) => {
    setSelectedRole(value);
  };

  const handleProceed = () => {
    if (selectedRole !== '') {
      setShowRoleSelectorWindow(false);
    } else {
      setShowRoleSelectorWindow(true);
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      setUserInfo(currentUser);
      if (role === '') {
        setShowRoleSelectorWindow(true);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if(selectedRole) {
      setRole(selectedRole);
    }
  }, [selectedRole]);

  useEffect(() => {
    return () => {
      setSelectedRole('');
    }
  }, []);

  const renderContent = () => {
    return showRoleSelectorWindow ?
      <div className={styles.roleSelection}>
        <RoleSelection handleChange={handleChange} handleProceed={handleProceed}/>
      </div> :
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.contents}>
          <Header />
          <BreadCrumbs />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
  };

  return (
    renderContent()
  );
};

export default MainLayout;
