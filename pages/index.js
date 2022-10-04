import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Categories from '../components/Categories'
import Choice from '../components/Choice'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Reward from '../components/Reward'
import Search from '../components/Search'
import Statistics from '../components/Statistics'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'
import Trend from '../components/Trend'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Go2Uni</title>
        <meta name="description" content="Find more fun and interesting ways to prepare for university entrance exams in Nigeria" />
        <link rel="icon" href="/Images/logo.png" />
        </Head>

        <Hero></Hero> 
        
         <Statistics></Statistics> 
         
        
         <Categories></Categories> 
         
        
         <Search></Search> 
         
        
         <Trend></Trend>  
         
        
         <Choice></Choice> 
         
        
         <About></About> 
         
        
         <Reward></Reward> 

         <Testimonial></Testimonial>

         <Subscribe></Subscribe>
         
     

      
    </div>
  )
}
