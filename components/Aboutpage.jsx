import React from "react";
import styles from "../styles/AboutGo2Uni.module.css";
import Image from "next/image";
import Link from "next/link";

const Aboutpage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_banner} style={{ width: "100vm", height: "13rem", position: "relative" }}>
        <Image src="/Images/aboutus.png" alt="About Us" layout="fill"></Image>
      </div>



      <div className={styles.about_main}>
        
        <div className={styles.about_text}>
          <p>
            Go2uni is an educational platform and academic social network
            targeted at Nigerian senior secondary school students to aid their
            preparation for university entry exams. Go2uni is a high quality,
            resource-packed, innovative and very affordable learning platform.
          </p>

          <p>
            We offer innovative solutions to the high cost of
            education,traditional learning and fallen standard of education.
          </p>

            <div className={styles.inline_images}>

          <div className={styles.inline_image} style={{ width: "5rem", height: "5rem", position: "relative" }}>
            <Image
              src="/Images/image6.png"
              alt="About Us"
              layout="fill"
            ></Image>
          </div>
         

          <div className={styles.inline_image} style={{ width: "5rem", height: "5rem", position: "relative" }}>
            <Image
              src="/Images/image4.png"
              alt="About Us"
              layout="fill"
            ></Image></div> 
            
            </div>

          <h2>How It  Works</h2>

          <p>
            With educational content, resources and tutors, Go2uni offers
            students everything they need in one place. Lectures, Knowledge based
            test, opportunity to chat with tutors and also study groups where
            students get to interact and share ideas regarding a certain topic
            or challenge and help each other overcome such challenges. <br />{" "}
            <br /> With easy access to joining, kick start your learning
            possibilities with Go2uni and be the best you ought to be.{" "}


          </p>

          <Link href='/signup'>Get Started</Link>
        </div>

        <div className={styles.about_images}>

           <div className={styles.about_image} style={{ width: "5rem", height: "5rem", position: "relative" }}>
            <Image
              src="/Images/image6.png"
              alt="About Us"
              layout="fill"
            ></Image>
          </div>

          <div className={styles.about_image} style={{ width: "5rem", height: "5rem", position: "relative" }}>
            <Image
              src="/Images/image4.png"
              alt="About Us"
              layout="fill"
            ></Image> 
          </div>

        </div>

      </div>
    </div>
  );
};

export default Aboutpage;
