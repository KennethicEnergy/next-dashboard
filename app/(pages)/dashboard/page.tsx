"use client"
import Card from '@/components/card/card'
import React from 'react'
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
      <Card
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      />
      <Card
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
        okText
        cancelText
      />
      <Card
        title="LOREM"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        okText="YES"
        cancelText="NO"
        okFunc={() => alert("HAAAA!")}
        cancelFunc={() => alert("HOOO!")}
      />
      <Card
        title="LOREM IPSUM DOLOR"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est consequatur ducimus dolorum ratione dolorem, ipsam totam dolor ."
      />
      <Card
        title="HUEHUEHUEHUE"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        okText="YES"
        cancelText="NO"
        okFunc={() => alert("HAAAA!")}
        cancelFunc={() => alert("HOOO!")}
      />
    </div>
  </div>
  )
}

export default Dashboard