import React from "react";
import styles from './header.module.scss';
import { ProfileButton } from "firebase-nextjs/client/components";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Header = () => {
	return (
    <div className={styles.container}>
      <motion.div whileTap={{ scale: 0.9 }} className={styles.menu}>
        <RxHamburgerMenu />
      </motion.div>
      <ProfileButton />
    </div>
	);
};

export default Header;
