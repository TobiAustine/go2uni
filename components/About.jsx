import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.about} >
        <div className={styles.about_container}>
            <div className={styles.about_image}>
                  <div className={styles.image3}>
                <Image src='/Images/Rectangle1.png' width={350} height={250} alt=''></Image>
                </div>

                <div className={styles.image4}>
                <Image src='/Images/Rectangle1.png' width={350} height={250} alt=''></Image>
                </div>
                
                <div className={styles.image1}> 
                <Image src='/Images/about.png' width={350} height={250} alt=''></Image>
                </div>

                <div className={styles.image2}>
                <Image src='/Images/Rectangle.png' width={350} height={250} alt=''></Image>
                </div>

              
            </div>
            
            <div className={styles.about_text}>
                <h2>ABOUT US</h2>
                <p>Go2uni is an educational platform and academic social network targeted at Nigerian senior secondary school students to aid their preparation for university entry exams.</p>
                <Link href='/'>Know More About Us...</Link>
            </div>

        </div>
        
        
        </div>
  )
}

export default About