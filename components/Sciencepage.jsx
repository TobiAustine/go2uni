import React from "react";
import styles from "../styles/science.module.css";
import Image from "next/image";
import Link from "next/link";

const Sciencepage = () => {
  return (
    <div className={styles.science}>
     <div className={styles.department}>Sciences</div>
     <div className={styles.state}>Welcome to the World of science. Choose your Subject</div>
      <div className={styles.grid_container}>
          <div className={styles.box_container}> 
            <div> <Image src="/Images/Algebraic.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}> Algebraic Equation</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Integration.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div></div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Trig.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Trigonometry</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Number.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Trig.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Trigonometry</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Number.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Algebraic.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Integration.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Algebraic.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Trig.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Number.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Algebraic.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div></div>
          </div>
      </div>
    </div>

  );
};

export default Sciencepage;
