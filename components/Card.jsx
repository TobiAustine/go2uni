import React from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({src, background, department, alt}) => {
  return (
    <div className={styles.card_container}>
        <div className={styles.card} style={background={background}}>
        <Image width={250} height={250} objectFit='contain' src={src} alt={alt}></Image>
        </div> 
        <div className={styles.department}>
           <Link href='/'>{department}</Link> 
        </div>
        
   
    </div>
  )
}

export default Card