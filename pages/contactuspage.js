import React from 'react'
import Contactuspage from '../components/contactuspage'
import Head from 'next/head'
import NoFooterLayout from '../components/NoFooterLayout'
// import Title from 'next/title'
// import Meta from 'next/meta'
// import Link from 'next/link'


const contactuspage = () => {
  return (
<>
     <Head>
     <title>Contact Us | Go2Uni</title>
        <meta name="contact us" content="Contact us through the following medium" />
        <link rel="icon" href="/Images/logo.png" />
     </Head>

     <Contactuspage></Contactuspage>
     
</>

  )
}

export default contactuspage