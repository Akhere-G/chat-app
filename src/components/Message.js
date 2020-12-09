import React from "react";
import styles from "./Message.module.css";
import PropTypes from "prop-types";

const Message = ({ message, user, currentUser, timestamp }) => {
  const style = currentUser.id === user.id ? "yourMessage" : "theirMessage";
  const name = currentUser.id === user.id ? "" : `${user.username} |`;

  let timeText = "loading";
  if (timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const datePosted = date.toLocaleDateString();
    const timePosted = date.toLocaleTimeString().substring(0, 5);
    timeText =
      new Date().toLocaleDateString() === datePosted
        ? `${timePosted}`
        : `${datePosted} | ${timePosted}`;
  }

  return (
    <div className={`${styles.message} ${styles[style]}`}>
      <header>
        <p>
          {name} {timestamp && timeText}
        </p>
        {!timestamp && <span className={styles.loading}></span>}
      </header>
      <footer>
        <h4>{message}</h4>
      </footer>
    </div>
  );
};

Message.defaultProps = {
  timestamp: { seconds: new Date().getTime() },
};
Message.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.shape({ username: PropTypes.string, id: PropTypes.string })
    .isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  timestamp: PropTypes.shape({ username: PropTypes.number }),
};

export default Message;
