import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import { BiAccessibility } from "react-icons/bi";
import { TSidebarItem } from "@/services/types";
import { useRouter } from "next/navigation";

const Sidebar = () => {
	const [selectedPath, setSelectedPath] = useState("dashboard");
  const router = useRouter();
	const sidebarItems: TSidebarItem[] = [
		{ title: "Dashboard", path: "dashboard" },
		{ title: "Property", path: "property" },
		{ title: "Tenants", path: "tenants" },
		{ title: "Add Property", path: "add-property" },
		{ title: "Maintainer", path: "maintainer" },
		{ title: "Contacts", path: "contacts" },
	];

	const handleSelect = (path: string) => {
		setSelectedPath(path);
    router.push(path);
	};

	return (
		<div className={styles.container}>
			<div className={styles.contents}>
				<div className={styles.brand}>
					<BiAccessibility />
					Dash
				</div>
				<div className={styles.contents}>
					<div className={styles.menu}>
						{sidebarItems.map((item, index) => (
							<motion.span
								key={index}
								whileTap={{ scale: 0.9 }}
								onClick={() => handleSelect(item.path)}
                className={`${styles.menuItem} ${ item.path === selectedPath ? styles.selected : "" }`}>
								{item.title}
							</motion.span>
						))}
					</div>
				</div>
			</div>
			<div className={styles.footer}>@2024</div>
		</div>
	);
};

export default Sidebar;
