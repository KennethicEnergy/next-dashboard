"use client"
import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TProps = {
  body: string;
  img?: string;
  title?: string;
  okText?: string | boolean;
  cancelText?: string | boolean;
  okFunc?: (data?: any) => void;
  cancelFunc?: (data?: any) => void;
  cardOpenFunc?: (data?: any) => void;
}

const Card = ({ title, img, body, okText, cancelText, okFunc, cancelFunc, cardOpenFunc }: TProps) => {
  return (
    <div className={styles.card} onClick={cardOpenFunc} data-click-open={cardOpenFunc ? "1" : "0"}>
      {title && <h1 className={styles.cardTitle}>{title}</h1>}
      {title && <><hr /><br /></>}
      {img && <><Image src={img} alt={'image'} quality={100} priority width={500} height={100} /><br/></>}
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
