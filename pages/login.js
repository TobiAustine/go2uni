import React from 'react'
import Login from '../components/Login'
import Head from 'next/head'

const login = () => {
  return (
  <>
  <Head>
     <title>Log In | Go2Uni</title>
     <meta name="Log in to Go2Uni" content="Get to know about more fun and interesting ways to prepare for university entrance exams in Nigeria" />
     <link rel="icon" href="/Images/logo.png" />
     </Head>
  <Login></Login>
  
  </>
  )
}

export default login