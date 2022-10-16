import React from 'react'
import Head from 'next/head'
import Signup from '../components/Signup'


const signup = () => {
  return (
     <>
     <Head>
     <title>Sign up | Go2Uni</title>
        <meta name="Sign up" content="Sign up to get going" />
        <link rel="icon" href="/Images/logo.png" />
     </Head>
     <Signup></Signup>
     
</>

  )
}

export default Signup