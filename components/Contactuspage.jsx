import React from "react";
import styles from "../styles/Contactus.module.css";
import Image from "next/image";
import Link from "next/link";

const Contactuspage = () => {
  return(
  <div>
    <div className={styles.contact_bold}> CONTACT US </div>
    <div className={styles.contact_center_text}>Any comment or remarks? Please contact us via any of this
        <div>platforms</div>
    </div>
    <div className={styles.form_sect}>
      <div>+234 0800 000 1000
        <div> contactus@gmail.com</div>
      </div>
        <div>
          <form>
            <dl>
              <dt className={styles.form_value}> Email Address </dt>
                <dd width="100%"> <input name="email" type="email" className={styles.form_box}></input> </dd>
              <dt className={styles.form_value}> Subject </dt>
                <dd width="100%"> <input name="subject" type="subject" className={styles.form_box}></input> </dd>
              <dt className={styles.form_value}> Description </dt>
                <dd width="100%"> <input name="subject" type="textarea" className={styles.Desp_box}></input> </dd>
                <input name="submit" value="Send Message" type="submit" className={styles.send_col} ></input>
            </dl>
          </form>
        </div>
    </div>
    </div>
  
  );
};

export default Contactuspage;