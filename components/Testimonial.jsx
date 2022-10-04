import React from 'react'
import styles from '../styles/Testimonial.module.css'
import Image from 'next/image'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'

function Testimonial() {
  return (
    <div className={styles.testimonial}>
        <div className={styles.testimonial_container}>
        <div className={styles.testimonial_head}>
            <h2>WHAT OUR STUDENTS SAY ABOUT US</h2>
        </div>

        <div className={styles.testimonial_body}>

        <div className={styles.testimonial_text}>
                    <h2>Stella Smith</h2>
                    <p>Go2uni made understand the principles behind Algebra. I always thought i would never love mathematics.Thank you Go2uni.  </p>
                    <div className={styles.testimonial_ratings}>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStarHalfAlt color='var(--primary-color)' size={20}></FaStarHalfAlt>
                    </div>
            </div>

            <div className={styles.testimonial_image}>
                <Image src='/Images/image3.png' width={200} height={210} objectFit='cover' alt='' classname={styles.img}></Image>
            </div>
            
            </div>
        </div>
        </div>
  )
}

export default Testimonial