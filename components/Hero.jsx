import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.hero_text}>
                <div className={styles.hero_text_head}>
                   <h2>Welcome,</h2> 
                </div>
                <div className={styles.hero_text_body}>
                    <h3>Are you preparing for your <br />  WAEC, NECO or UTME exams?</h3>
                    <p>Go2Uni offers you more ways to learn seemingly difficult concepts and retain knowlege better. Click the button below to get started.</p>

                    <button className={styles.hero_cta}>
                        <Link href='/signup'> Get Started</Link>
                    </button>

                </div>

            </div>

            <div className={styles.hero_image}>
                <div className={styles.image1}><Image src='/Images/Ellipse2.png' width='150%' height='150%' objectFit='contain' alt=''></Image></div>
                 
                 <div className={styles.image2}><Image src='/Images/image6.png' width='150%' height='150%'objectFit='contain' alt=''></Image></div>
                
                <div className={styles.image3}><Image src='/Images/image5.png' width='150%' height='150%'objectFit='contain' alt=''></Image></div>
                
                <div className={styles.image4}><Image src='/Images/image4.png' width='150%' height='150%'objectFit='contain' alt=''></Image></div> 
                
            </div>





        </div>

    </div>
  )
}

export default Hero