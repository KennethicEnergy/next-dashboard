import { ProfileButton } from "nextfirejs/client/components";
import React from "react";
import styles from './header.module.scss';

const Header = () => {
	return (
    <div className={styles.container}>
      <ProfileButton />
    </div>
	);
};

export default Header;
