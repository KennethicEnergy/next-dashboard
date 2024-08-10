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
import { firebaseApp } from "@/firebase-app-config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const currentUser: FirebaseNextJSContextType = getUserCS();
  const { role, userInfo, setUserInfo, setRole} = useUserAccountStore();
  const [showRoleSelectorWindow, setShowRoleSelectorWindow] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, "users", "8aRHo8rdoG7OlL0DraeR");
  const [data, setData] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
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
    // getDoc(docRef).then((doc) => {
    //   setData(doc.data()!.keyName);
    // })
    // console.log(data);
    return () => {
      setSelectedRole('');
    }
  }, [])

  console.log(currentUser)

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
