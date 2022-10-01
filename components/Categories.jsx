import React from 'react'
import styles from '../styles/Categories.module.css'
import Card from './Card'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className={styles.categories}>
        <div className={styles.category_container}>
            <div className={styles.category_head}>
                <h1>DEPARTMENTS</h1>
                <p>We have videos on topics across the different departments.</p>
                <div className={styles.category_head_img}>
                   <Image src='/Images/Ellipse23.png' width={25} height={25}  ></Image> 
                </div>
                
            </div>
            <div className={styles.category_body}>
                <Card src={'/Images/microscope.png'} background={'#F55376'} department='Science'></Card>
                <Card src={'/Images/market1.png'} background={'#64B4BF'} department='Commercial'></Card>
                <Card src={'/Images/art-studies.png'} background={'#FABD17'} department='Art'></Card>

            </div>
        </div>
    </div>
  )
}

export default Categories