"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import styles from "./main-layout.module.scss";
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import useUserAccountStore from "@/store/accountStore";
import { getUserCS } from "firebase-nextjs/client/auth";
import { FirebaseNextJSContextType } from "@/services/types";
import RoleSelection from "../role-selection/role-selection";
import { useRouter } from "next/navigation";
import { addUser, getUserByQuery } from "@/services/helpers";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const currentUser: FirebaseNextJSContextType = getUserCS();
	const { role, userInfo, setUserInfo, setRole } = useUserAccountStore();
	const [showRoleSelectorWindow, setShowRoleSelectorWindow] = useState(false);
	const [selectedRole, setSelectedRole] = useState("");
	const router = useRouter();

	const handleChange = (value: string) => {
		setSelectedRole(value);
	};

	const handleProceed = () => {
		if (selectedRole !== "") {
      setRole(selectedRole);
			setShowRoleSelectorWindow(false);
		}
	};

	useEffect(() => {
    const checkIfEmailIsRegistered = async () => {
      const data = await getUserByQuery('email', '==', currentUser.currentUser?.email);
      console.log(data);
      if (data.length > 0) {
        setRole(data[0].role);
        setShowRoleSelectorWindow(false);
      } else {
        addUser(selectedRole, currentUser);
      }
    }
    checkIfEmailIsRegistered();

    if (currentUser !== null) {
			setUserInfo(currentUser);
			if (role === "") {
				setShowRoleSelectorWindow(true);
			}
		}

		return () => {
			setSelectedRole("");
		};
	}, []);

	const renderContent = () => {
		return showRoleSelectorWindow ? (
			<div className={styles.roleSelection}>
				<RoleSelection
					handleChange={handleChange}
					handleProceed={handleProceed}
				/>
			</div>
		) : (
			<div className={styles.main}>
				<Sidebar />
				<div className={styles.contents}>
					<Header />
					<BreadCrumbs />
					{children}
				</div>
			</div>
		);
	};

	return renderContent();
};

export default MainLayout;
