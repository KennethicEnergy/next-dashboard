"use client"
import Card from '@/components/card/card'
import React from 'react'
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
      <Card body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
  </div>
  )
}

export default Dashboard