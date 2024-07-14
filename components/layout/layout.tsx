import React from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import Header from '@/components/header/header';
import styles from '../public/layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.contents}>
        <Header />
      </div>
    </div>
  );
};

export default Layout;