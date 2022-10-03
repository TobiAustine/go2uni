import React from 'react'
import styles from '../styles/ChoiceCard.module.css'
import Image from 'next/image'

const ChoiceCard = ({src,head,text}) => {
  return (
    <div className={styles.choice_card}>
      <div className={styles.card_image}>
        <Image src={src} width={90} height={90} alt=''></Image>
      </div>
      <div className={styles.card_text}>
        <h2>{head}</h2>
        <p>{text}</p>
     </div>
    </div>
  )
}

export default ChoiceCard