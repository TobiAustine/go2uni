import React, {useState} from 'react'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import {FcGoogle} from 'react-icons/fc'
import Link from 'next/link'

const Login = () => {
    const [formData, setformData] = useState({
      email:'',
      password:''
    })

    const onChange = (e) => {
      setformData(e.target.value)
    }



  const onSubmit = (e) => {
    e.preventDefault()
 }


  return (
    <div className={styles.login}>
        <div className={styles.login_container}>

        <div className={styles.login_image}>
            <div className={styles.thumb} style={{height:'50rem', width:'30rem' , position:'relative'}}>
           <Image alt='login' layout='fill' src='/Images/fingerprint.svg'></Image>
           </div>     
        </div>



            <div className={styles.login_text}>
              <div className={styles.text_head}>
                <h2>Welcome Back!</h2>
                <p>Please enter your details.</p>
              </div>


              <div className={styles.text_body}>
                <form action="" onSubmit={onSubmit}>

                <div className={styles.email}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="" value={formData.email} onChange={onChange}/>
                </div>


                <div className={styles.password}>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="" value={formData.password} onChange={onChange}/>
                </div>


                <div className={styles.remember}>
                    
                    <div className={styles.remember_me}>
                    <input type="radio" name="remember me" id="" />
                    <label htmlFor="remember me">Remember Me</label>
                    </div>

                    <div className={styles.forgot_password}>
                      <Link href='/'>Forgot Password?</Link>
                    </div>
                   
                </div>

                <button type="submit" className={styles.signin}>Sign In</button>

                <button type="submit" className={styles.google}>
                  <FcGoogle size={25}></FcGoogle> Sign in with Google
                </button>


                </form>

                <p>Do not have an account? <Link href='/signup'>Sign up here</Link> </p>
              </div>
                
            </div>

        </div>
    </div>
  )
}

export default Login