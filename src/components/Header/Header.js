import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <h1>Chat App</h1>
      </div>
    </header>
  );
};

export default Header;
