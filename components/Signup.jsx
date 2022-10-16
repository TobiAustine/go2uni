import React from "react";
import styles from "../styles/SignUp.module.css";
import Image from "next/image";
import Link from "next/link";
import {FcGoogle} from 'react-icons/fc'

const Signup = () => {
  return (
    <div>
    <div className={styles.logo_image}><Link href="/Home" ><Image src="/Images/logo.png" width="48px" height="48px"></Image></Link>
    <div className={styles.logo_text}>
            <Link href="/Home"><a href=""><p>GO<span>2</span>UNI</p></a></Link> </div>
     </div>
      <div className={styles.Signup}>
        <div className={styles.Signup_container}>
        <div className={styles.Signup_Image}>
            <Image src="/Images/Signup.png" alt="Signup" width="650vm" height="550px"></Image>  
        </div>
        <div className={styles.FormInput}>
           <div className={styles.Signup_bold}>
            Sign Up
            </div>
            <div className={styles.form_center}> 
           <div className={styles.FormInput_text}> 
             <form>
               <button type="submit" className={styles.google_box}>
                  <FcGoogle size={24}></FcGoogle> Sign in with Google
                </button>
        
               <div className={styles.Alternative}>
                <div className={styles.HorizontalLine}>
                </div>
                <div className={styles.Alternative_text}>or</div>
                <div className={styles.HorizontalLine}></div>
            </div>
              <dl>
                <dt className={styles.form_text}> Name </dt>
                <dd> <input name="name" className={styles.forms_box}></input> </dd>
                <dt className={styles.form_text}> Email Address </dt>
                <dd width="100%"> <input name="email" type="email" className={styles.forms_box}></input> </dd>
                <dt className={styles.form_text}>Password</dt>
                <dd> <input name="password" type="password" className={styles.forms_box}></input> </dd>
                <input name="submit" value="Register" type="submit" className={styles.reg_col} ></input>
              </dl>
            </form>
            <p className= {styles.question}>Already have an account? <Link href='/Login'> Log in</Link></p>
            </div>
            </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
    export default Signup;
