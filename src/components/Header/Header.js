import React from "react";
import styles from "./Header.module.css";

const Header = ({ logo, setUser }) => {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <div>
          <h1>Chat App</h1>
          <div className={styles.logoContainer}>
            <img src={logo} alt='logo' />
          </div>
        </div>
        <button
          onClick={() => {
            const isLoggingOut = window.confirm("Are you sure?");
            if (isLoggingOut) {
              setUser(null);
            }
          }}
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
