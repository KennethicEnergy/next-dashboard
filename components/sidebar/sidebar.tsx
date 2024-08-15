import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import { BiAccessibility } from "react-icons/bi";
import { TSidebarItem } from "@/services/types";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [filteredSidebarItems, setFilteredSidebarItems] = useState<TSidebarItem[]>([]);
  const router = useRouter();

  const sidebarItems: TSidebarItem[] = [
    { title: "Dashboard", path: "dashboard", roles: ["LANDLORD"] },
    { title: "Property", path: "property", roles: ["LANDLORD", "TENANT", "GUEST", "SERVICEPRO"] },
    { title: "Tenants", path: "tenants", roles: ["LANDLORD"] },
    { title: "Maintainer", path: "maintainer", roles: ["LANDLORD", "SERVICEPRO"] },
    { title: "Contact Us", path: "contacts", roles: ["LANDLORD", "TENANT", "GUEST", "SERVICEPRO"] },
  ];

  const getUserRole = (): string | null => {
    try {
      const userLocalData = JSON.parse(localStorage.getItem("user-store") || "{}");
      return userLocalData?.state?.role || null;
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      return null;
    }
  };

  const filterSidebarItems = (role: string): TSidebarItem[] => {
    switch (role) {
      case "TENANT":
      case "GUEST":
        return sidebarItems.filter(item => ["property", "contacts"].includes(item.path));

      case "SERVICEPRO":
        return sidebarItems.filter(item => ["property", "contacts", "maintainer"].includes(item.path));

      case "LANDLORD":
      default:
        return sidebarItems;
    }
  };

  useEffect(() => {
    const userRole = getUserRole();
    if (userRole) {
      const filteredItems = filterSidebarItems(userRole);
      setFilteredSidebarItems(filteredItems);
      if (!selectedPath) {
        const defaultPath = filteredItems[0]?.path || "dashboard";
        setSelectedPath(defaultPath);
        router.push(defaultPath);
      }
    }
  }, [selectedPath]);

  useEffect(() => {

  }, [])

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
            {filteredSidebarItems.map((item, index) => (
              <motion.span
                key={index}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSelect(item.path)}
                className={`${styles.menuItem} ${item.path === selectedPath ? styles.selected : ""}`}
              >
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
