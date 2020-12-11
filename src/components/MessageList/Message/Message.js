import React, { useState, useEffect } from "react";
import styles from "./Message.module.css";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
const Message = ({
  message,
  user,
  currentUser,
  timestamp,
  backgroundColor,
}) => {
  const style = currentUser.id === user.id ? "yourMessage" : "theirMessage";
  const name = currentUser.id === user.id ? "Me" : user.username;
  const [entered, setEntered] = useState(false);

  let timeText = "";
  if (timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const datePosted = date.toLocaleDateString();
    const timePosted = date.toLocaleTimeString().substring(0, 5);
    timeText =
      new Date().toLocaleDateString() === datePosted
        ? `${timePosted}`
        : `${datePosted} | ${timePosted}`;
  }

  useEffect(() => {
    setEntered(true);
  }, []);

  return (
    <Transition
      in={entered}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
      }}
      unmountOnExit
    >
      {state => (
        <div className={`${styles.message} ${styles[style]}`}>
          <header
            style={{ backgroundColor: `hsl(${backgroundColor},100%, 73% )` }}
          >
            <p className={styles.name}>{name}</p>

            {state === "entered" && <p className={styles.time}>{timeText}</p>}
            {state === "entering" && <span className={styles.loading}></span>}
          </header>
          <footer
            style={{ backgroundColor: `hsl(${backgroundColor},100%, 83% )` }}
          >
            <h4>{message}</h4>
          </footer>
        </div>
      )}
    </Transition>
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
