import React from 'react'
import styles from '../styles/Search.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Image from 'next/image'

const Search = () => {
  return (
    <div className={styles.search}>
        <div className={styles.search_container}>
            <div className={styles.search_head}>
                <h2>What do you need help with? <span>We&apos;ve got you covered</span></h2>
            </div>
            <div className={styles.search_body}>
                <p>We have materials at your disposal, it takes just a search to get <br /> what you need.</p>
            </div>
            <div className={styles.search_input}>
               <input type="text" className={styles.searchbar} placeholder='Search for a topic...'/>
               <div className={styles.search_icon}>
                    <AiOutlineSearch></AiOutlineSearch>
               </div>
            </div>
            
        <div className={styles.line1}>
        <Image src='/Images/Vector1.png' width={250} height={20} alt=''></Image>
      </div>
      <div className={styles.line2}>
        <Image src='/Images/Vector1.png' width={250} height={20} alt=''></Image>
      </div>
      <div className={styles.ellipse}>
        <Image src='/Images/Ellipse27.png' width={30} height={30} alt=''></Image>
      </div>

        </div>
      
    </div>
  )
}

export default Search