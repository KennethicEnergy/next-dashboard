import React from 'react'
import styles from './sidebar.module.scss'
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.brand}>Dashboard</div>
        <div className={styles.contents}>
          <div className={styles.menu}>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Dashboard</motion.span>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Property</motion.span>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Tenants</motion.span>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Add Property</motion.span>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Maintainer</motion.span>
            <motion.span whileTap={{ scale: 0.9 }} className={styles.menuItem}>Contacts</motion.span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>@2024</div>
    </div>
  )
}

export default Sidebar;