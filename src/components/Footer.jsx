import React from "react";
import Copyright from "@/components/Copyright";
import styles from "@/styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <Copyright position="fixed" bottom="15px" />
    </div>
  );
}

export default Footer;
