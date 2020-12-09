import React from "react";
import styles from "./Message.module.css";

const Message = ({ message, user, currentUser, timestamp }) => {
  const style = currentUser.id === user.id ? "yourMessage" : "theirMessage";
  const name = currentUser.id === user.id ? "" : `${user.username} |`;
  const date = new Date(timestamp.seconds * 1000);
  const datePosted = date.toLocaleDateString();
  const timePosted = date.toLocaleTimeString().substring(0, 5);
  const timeText =
    new Date().toLocaleDateString() === datePosted
      ? `${timePosted}`
      : `${datePosted} | ${timePosted}`;

  return (
    <div className={`${styles.message} ${styles[style]}`}>
      <header>
        <p>
          {name} {timeText}
        </p>
      </header>
      <footer>
        <h4>{message}</h4>
      </footer>
    </div>
  );
};

export default Message;
