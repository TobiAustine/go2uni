import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Hero = () => {

    useEffect(() => {
      AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
    }, [])
    

   



  return (
    <div className={styles.hero}>
        <div className={styles.hero_container}>
            <div className={styles.hero_text} data-aos="fade-right">
                <div className={styles.hero_text_head}>
                   <h2>Welcome,</h2> 
                </div>
                <div className={styles.hero_text_body}>
                    <h3>Are you preparing for your <br />  <span>WAEC, NECO or UTME</span>  exams?</h3>
                    <p>Go2Uni offers you more ways to learn seemingly difficult concepts and retain knowlege better. Click the button below to get started.</p>

                    <div className={styles.inline_images}>

                    <div className={styles.inline_image1} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/image5.png' layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.inline_image2} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/image6.png' layout='fill' alt=''></Image>
                 </div>

                    </div>

                    <button className={styles.hero_cta}>
                        <Link href='/signup'> Get Started</Link>
                    </button>

                </div>

            </div>

            <div className={styles.hero_image} data-aos="fade-left">
                {/* <div className={styles.image1}><Image src='/Images/Ellipse2.png' width='150%' height='150%' alt=''></Image></div>
                 
                 <div className={styles.image2}><Image src='/Images/image6.png' width='150%' height='150%'alt=''></Image></div>
                
                <div className={styles.image3}><Image src='/Images/image5.png' width='150%' height='150%' alt=''></Image></div>
                
                <div className={styles.image4}><Image src='/Images/image4.png' width='150%' height='150%' alt=''></Image></div> 
                 */}

                 <div className={styles.newellipse} style={{height:'6rem', width:'6rem', position:'relative'}}>
                 <Image src='/Images/Ellipse22.png'layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.newimage1} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/Ellipse2.png'layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.newimage2} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/image4.png' layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.newimage3} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/image5.png' layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.newimage4} style={{height:'10rem', width:'10rem', position:'relative'}}>
                 <Image src='/Images/image6.png' layout='fill' alt=''></Image>
                 </div>

                 <div className={styles.newimage5} style={{height:'2rem', width:'2rem', position:'relative'}}>
                 <Image src='/Images/Ellipse25.png' layout='fill' alt=''></Image>
                 </div>
            </div>





        </div>

    </div>
  )
}

export default Hero