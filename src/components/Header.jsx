import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logoBrand from "@/images/logoBrand.png";
import styles from "@/styles/header.module.css";
import Image from "next/image";

function Header() {
  let userName = "Diego Martinotti";

  return (
    <div className={styles.navContainer}>
      <section className={styles.userWelcoming}>
        <Image src={logoBrand} width={"auto"} height={"auto"}></Image>
        <div>
          <p>welcome {userName}</p>
          <AccountCircleIcon fontSize="large" />
        </div>
      </section>
    </div>
  );
}

export default Header;
