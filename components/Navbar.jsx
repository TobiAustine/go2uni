import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className={styles.navbar}>

        <div className={styles.logo}>
        <div className={styles.logo_image}>
            <Link href="/"><a > <Image src='/Images/WhatsApp_Image_2022-09-07_at_1 2.png' width='50' height='50'></Image></a></Link>
        </div>

        <div className={styles.logo_text}>
          
            <Link href="/"><a href=""><p>GO<span>2</span>UNI</p></a></Link> 
        </div>

        </div>

        <div className={styles.nav_menu}>
            <ul>
                <li> <Link href='/'>Home</Link> </li>
                <li> <Link href='/about'>About Us</Link></li>
                <li> <Link href='/category'><a href=""> Category <IoIosArrowDown className={styles.arrow}></IoIosArrowDown></a></Link></li>
                <li> <Link href='/contact'>Contact Us</Link></li>
            </ul>

        </div>

        <div className={styles.nav_cta}>
                <Link href='/signup'><a href=""className={styles.sign_up}>Sign Up</a></Link>
                <Link href='/login'><a href=""className={styles.login}> Log In</a></Link>

        </div>





    </div>
  )
}

export default Navbar