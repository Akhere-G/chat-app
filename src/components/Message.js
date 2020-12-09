import React from "react";
import styles from "./Message.module.css";
const Message = ({ message, username, currentUser, timestamp }) => {
  const style = currentUser === username ? "yourMessage" : "theirMessage";
  return (
    <div className={`${styles.message} ${styles[style]}`}>
      <header>
        <p>{username}</p>
        <p>{new Date(timestamp).toUTCString()}</p>
      </header>
      <footer>
        <h4>{message}</h4>
      </footer>
    </div>
  );
};

export default Message;
