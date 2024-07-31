import React from 'react'
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';

const BreadCrumbs = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>BREADCRUMBS</div>
  )
}

export default BreadCrumbs