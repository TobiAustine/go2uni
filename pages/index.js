import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Go2Uni</title>
        <meta name="description" content="Find more fun and interesting ways to prepare for university entrance exams in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     

      
    </div>
  )
}
