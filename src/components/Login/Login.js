import React from "react";
import styles from "./Login.module.css";
import { auth, provider } from "../../firebase";

export default function Login({ setUser }) {
  const colors = [];

  for (let i = 0; i < 18; i++) {
    colors.push(i * 20);
  }
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
    <div className={styles.login}>
      <div className={styles.loginCenter}>
        <div className={styles.loginLogo}>
          <img
            className={styles.loginImg}
            src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            alt='facebook logo'
          />
          <img
            className={styles.loginText}
            src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
            alt='facebook text'
          />
        </div>
        <button className={styles.loginButton} type='submit' onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
