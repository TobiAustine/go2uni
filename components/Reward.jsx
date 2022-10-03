import React from 'react'
import styles from '../styles/Reward.module.css'
import Image from 'next/image'

const Reward = () => {
  return (
    <div className={styles.reward}>
        <div className={styles.reward_container}>
            <div className={styles.reward_text}>
                    <h2>Get Rewarded!</h2>
                    <p>Schedule your class at your own pace and get rewarded for your dedication. </p>
                    <p>Schedule the time frame you want to take your course, get it completed and move up in your success story </p>
            </div>
            <div className={styles.reward_image}>
               <Image src='/Images/reward.png' width={600} height={500} alt=''></Image> 
            </div>

        </div>
        
       </div>
  )
}

export default Reward