import React from 'react';
import styles from '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">About</a></li>
        <li className={styles.navItem}><a href="#">Services</a></li>
        <li className={styles.navItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;