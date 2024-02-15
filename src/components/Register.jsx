import React from 'react';
import styles from "../styles/landing.module.css";
import SignUp from './RegisterCard';

function Register() {
  return (
<section className={styles.landingContainer}>

<article className={styles.backgroundImg}>
    <aside className={styles.opacity}>
        <div className={styles.contentContainer}>
            <SignUp/>
        </div>
    </aside>
</article>

</section>
  )
}

export default Register
