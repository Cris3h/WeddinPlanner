import React from "react";
import styles from "../styles/landing.module.css";
import SignInSide from "./Login";


function Landing() {
  return (
<section className={styles.landingContainer}>

    <article className={styles.backgroundImg}>
        <aside className={styles.opacity}>
            <div className={styles.contentContainer}>
                <SignInSide />
            </div>
        </aside>
    </article>

</section>
  );
}

export default Landing;
