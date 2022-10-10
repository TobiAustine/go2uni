import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {IoIosArrowDown, IoMdClose} from 'react-icons/io'
import {FaGraduationCap} from 'react-icons/fa'
import {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import { useEffect } from 'react'
import { BsGlobe} from 'react-icons/bs'


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

const  toggleMenuIcon = () => {
     setMobileMenu(prevState => !prevState)
     }

     //navbar scroll in active state
     const [navbar, setNavbar] = useState(false)

     //function to change navbar bg-color on scroll
     const changeBackground = () => {
        if (window.scrollY >= 40){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
     }

     useEffect(() => {
       changeBackground()
       window.addEventListener('scroll', changeBackground)}
       )
     

  return (
     <div className={` ${styles.navbar}   ${navbar ?  styles.navbar_active : styles.navbar}`}>

        <div className={styles.logo}>
        <div className={styles.logo_icon}>
            <Link href="/"><a > <FaGraduationCap size={40}></FaGraduationCap></a></Link>
        </div>

        <div className={styles.logo_text}>
          
            <Link href="/"><a href=""><p>GO<span>2</span>UNI</p></a></Link> 
        </div>

        </div>



        <div className={` ${styles.nav_menu} ${mobileMenu ? styles.mobile_nav_menu : styles.mobile_nav_menu_hidden} `}>
            <ul>
                <li> <Link href='/'>Home</Link> </li>
                <li> <Link href='/about'>About Us</Link></li>
                <li> <Link href='/category'><a> Category <IoIosArrowDown className={styles.arrow}></IoIosArrowDown></a></Link></li>
                <li> <Link href='/contact'>Contact Us</Link></li>
            </ul>

        </div>



        <div className={styles.nav_cta}>
                <Link href='/signup'><a className={styles.sign_up}>Sign Up</a></Link>
                <Link href='/login'><a className={styles.login}> Log In</a></Link>

        </div>

        <div className={styles.navbar_language}>
            <BsGlobe size={15}></BsGlobe>
            <select name="language" id="">
                <option value="English">English</option>
                <option value="Yoruba">Yoruba</option>
                <option value="Igbo">Igbo</option>
                <option value="Hausa">Hausa</option>
            </select>
        </div>



        <div className={styles.nav_icons} onClick={toggleMenuIcon}>
             {mobileMenu ? <IoMdClose size ={25} /> : <HiMenuAlt3 size = {25}/>} 
            
        </div>





    </div>
  )
}

export default Navbar