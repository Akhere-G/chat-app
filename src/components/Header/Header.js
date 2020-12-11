import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/image.png";
import PropTypes from "prop-types";

const Header = ({ setUser }) => {
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <h1>Chat App</h1>
        <div className={styles.logoContainer}>
          <img src={logo} alt='logo' />
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

Header.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Header;
