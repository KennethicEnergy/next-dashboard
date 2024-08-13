"use client"
import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';

type TProps = {
  body: string;
  title?: string;
  okText?: string | boolean;
  cancelText?: string | boolean;
  okFunc?: () => void;
  cancelFunc?: () => void;
}

const Card = ({ title, body, okText, cancelText, okFunc, cancelFunc }: TProps) => {
  return (
    <div className={styles.card}>
      {title && <h1 className={styles.cardTitle}>{title}</h1>}
      {title && <><hr /><br /></>}
      <span>{body}</span>

      <div className={styles.controls} style={okText || cancelText ? {marginTop: '1rem'} : {}}>
        {okText && (
          <motion.button className={styles.okBtn} whileTap={{ scale: 0.9 }} type="button" onClick={okFunc}>
            {typeof okText === "string" ? okText : "OK"}
          </motion.button>
        )}
        {cancelText && (
          <motion.button className={styles.cancelBtn} whileTap={{ scale: 0.9 }} type="button" onClick={cancelFunc}>
            {typeof cancelText === "string" ? cancelText : "Cancel"}
          </motion.button>
        )}
      </div>
    </div>
  )
}

export default Card;
