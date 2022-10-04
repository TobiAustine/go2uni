import React from 'react'
import styles from '../styles/Subscribe.module.css'
import {TiLocationArrow} from 'react-icons/ti'

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
        <div className={styles.subscribe_container}>
            <div className={styles.subscribe_head}>
                <h2>Receive new articles and resources directly to your mail.</h2>
                <h2>Fill in your email address below to join our email newsletter.</h2>
            </div>
            <div className={styles.subscribe_body}>
                
                <input type="email" name="" id="" placeholder='Subscribe to our Newsletter' />
            
                    <div className={styles.subscribe_icon}>
                         <TiLocationArrow size={35} ></TiLocationArrow>

                    </div>
                    
                   
            </div>

        </div>
        
        </div>
  )
}

export default Subscribe