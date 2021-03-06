import React from "react";
import styles from "./Login.module.css";
import { auth, provider } from "../../firebase";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import src from "../../assets/image.png";
export default function Login({ setUser }) {
  const signIn = e => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then(result => {
        setUser({ username: result.user.displayName, id: result.user.uid });
      })
      .catch(error => console.log(error.message));
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Helmet title='Chat App | Login' />
      <div className={styles.wrapper}>
        <div className={styles.messageIcon}>
          <ChatBubbleIcon fontSize='large' />
        </div>
        <h1 className={styles.text}>Chat App</h1>
        <button className={styles.btn} type='submit' onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};
