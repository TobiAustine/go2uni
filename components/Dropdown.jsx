import Link from 'next/link'
import React, {useState} from 'react'
import styles from '../styles/Dropdown.module.css'

const Dropdown = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {setClick(!click)}


  return (
    <div>
        <ul className={`${styles.dropdown_menu} ${click ? styles.clicked : styles.dropdown_menu} `} onClick={handleClick}>
           <li onClick={() => setClick(false)}> <Link href='/department/science' className={styles.dropdown_link}><a>Science</a></Link>  </li> 

           <li onClick={() => setClick(false)}> <Link href='/department/commercial' className={styles.dropdown_link}><a>Commercial</a></Link>  </li> 

           <li onClick={() => setClick(false)}> <Link href='/department/arts' className={styles.dropdown_link}><a> Arts</a></Link>  </li> 



        </ul>
    </div>
  )
}

export default Dropdown