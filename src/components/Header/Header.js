import React from "react";
import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <h1>Chat App</h1>
        <div className={styles.logoContainer}>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
