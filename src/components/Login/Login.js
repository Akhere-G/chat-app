import React from "react";
import styles from "./Login.module.css";
import { auth, provider } from "../../firebase";
import src from "../../assets/image.png";
export default function Login({ setUser }) {
  const signIn = e => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then(result => {
        setUser({ username: result.user.displayName, id: result.user.uid });
      })
      .catch(error => alert(error.message));
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={src} alt='logo' />
        </div>
        <h1 className={styles.text}>Chat App</h1>
        <button className={styles.btn} type='submit' onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
