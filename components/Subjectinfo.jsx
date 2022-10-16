import React from "react";
import styles from "../styles/subjectinfo.module.css";
import Image from "next/image";
import Link from "next/link";

const Subjectinfo = () => {
  return (

    <div className={styles.subject_info}>
     <div className={styles.department}>Sciences</div>
     <div className={styles.state}>Welcome to the World of science. Choose your Subject </div>
     <div className={styles.subject_bold}>Mathematics</div>
      <div className={styles.topic_bold}> Algebraic Equation </div>
      <div className={styles.Algebraic_video}><Image src="/Images/Algebraicvid.png" width="1450" height="800"></Image></div>
      <div className={styles.algebra_text}>
      <div className={styles.text}><m>Ratings:</m>star</div>
       <div className={styles.text}><m>Tutor:</m>Miss Julliet</div>
      <div className={styles.text}><m>Duration:</m>1 hour</div>
      <div className={styles.text}><m>Number of Lessons:</m>1 hour</div>
      <div className={styles.text}><m>Short description:</m>1 hour</div>
      </div>
      <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum nobis, aliquid perspiciatis aliquam excepturi porro ducimus sunt obcaecati beatae voluptates rerum dolorum eveniet! Maxime natus sunt eaque non eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad, impedit rem voluptates, excepturi, eius molestias vitae veritatis aliquid corrupti ratione. Perferendis, sapiente! Nobis accusamus eaque neque molestias, molestiae repellat.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sequi alias voluptatum veritatis tempore beatae iste dolorum illum rem, dolorem ipsam. Dolorem exercitationem quae nemo voluptate temporibus ut distinctio ipsum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aut possimus adipisci natus deleniti illo rerum molestiae nihil voluptatibus ratione voluptate reiciendis fugiat cum odit architecto, est commodi dolore nesciunt!
      </div>
        <div>
            <button type="">Start Now</button>
            <button> Add to Wishlist</button>
        </div>
    </div>
    

  );
};

export default Subjectinfo;
