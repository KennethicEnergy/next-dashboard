import React, { useEffect, useState } from "react";
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
    { title: "Contact", path: "contacts" },
  ];
  
  const [filteredSidebarItems, setFilteredSidebarItems] = useState(sidebarItems);

  const handleSelect = (path: string) => {
    setSelectedPath(path);
    router.push(path);
  };

  useEffect(() => {
    try {
      const userLocalData = JSON.parse(localStorage.getItem('user-store') || '{}');
      const userRole = userLocalData?.state?.role;

      if (userRole) {
        let filteredItems = sidebarItems;
        if (userRole === "TENANT") {
          filteredItems = sidebarItems.filter(item => {
            return item.path === 'property' || item.path === 'contacts';
          });
          setSelectedPath('property');
        }
        if (userRole === "SERVICEPRO") {
          filteredItems = sidebarItems.filter(item => item.path !== 'contacts');
        }
        setFilteredSidebarItems(filteredItems);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.brand}>
          <BiAccessibility />
          Dash
        </div>
        <div className={styles.contents}>
          <div className={styles.menu}>
            {filteredSidebarItems.map((item, index) => (
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
