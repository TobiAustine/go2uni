import React from 'react'
import Head from 'next/head'
import Aboutpage from '../components/Aboutpage'

const about = () => {
  return (
     <>
     <Head>
     <title>About Us | Go2Uni</title>
        <meta name="About Go2Uni" content="Get to know about more fun and interesting ways to prepare for university entrance exams in Nigeria" />
        <link rel="icon" href="/Images/logo.png" />
     </Head>
     <Aboutpage></Aboutpage>
     
     
     
     </>
  )
}

export default about