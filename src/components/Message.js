import React from "react";
import styles from "./Message.module.css";
const Message = ({ text, writter, currentUser }) => {
  const style = currentUser === writter ? "yourMessage" : "theirMessage";
  return (
    <div className={`${styles.message} ${styles[style]}`}>
      <header>
        <p>{writter}</p>
      </header>
      <footer>
        <h4>{text}</h4>
      </footer>
    </div>
  );
};

export default Message;
