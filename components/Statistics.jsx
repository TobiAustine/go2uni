import React from 'react'
import styles from '../styles/Statistics.module.css'

const Statistics = () => {
  return (
    <div className={styles.statistics}>
        <div className={styles.statistics_container}>
            <div className={styles.statistic}>
                <h1>10000+</h1>
                <h4>Active Students</h4>
            </div>

            <div className={styles.statistic}>
                <h1>4500+</h1>
                <h4>Up to Date Courses</h4>
            </div>

            <div className={styles.statistic}>
                <h1>300+</h1>
                <h4>Dedicated tutors</h4>
            </div>
        </div>
        
    </div>
  )
}

export default Statistics