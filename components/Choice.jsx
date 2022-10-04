import React from 'react'
import styles from '../styles/Choice.module.css'
import ChoiceCard from './ChoiceCard'
const Choice = () => {
  return (
    <div className={styles.choice}>
        <div className={styles.choice_container}>
            <div className={styles.choice_heading}>
                <h2>WHY CHOOSE US</h2>
                <p>Offering <span>INNOVATIVE</span> solutions to high cost of education, traditional learning and fallen standard of education.</p>
            </div>
            <div className={styles.choice_body}>
            <ChoiceCard src='/Images/training.png' head='24/7 tutor support' text='Our Tutors are readily available to give you the support you need'></ChoiceCard>
            <ChoiceCard src='/Images/video1.png' head='Video Tutorials' text='Up to date video lessons for your learning convienience'></ChoiceCard>
            <ChoiceCard src='/Images/study.png' head='Student study group' text='Meet with like minds like you and collaborate to make learning fun'></ChoiceCard>
            <ChoiceCard src='/Images/affordable.png' head='Affordability' text='Watch lessons without having to break the bank'></ChoiceCard>
            </div>

        </div>
        </div>
  )
}

export default Choice