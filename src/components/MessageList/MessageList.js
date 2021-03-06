import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message/Message";
import styles from "./MessageList.module.css";
import ScrollDownBtn from "./ScrollDownBtn/ScrollDownBtn";
import Helmet from "react-helmet";
const MessageList = ({ messages, user }) => {
  const idToHue = id => {
    if (!id) {
      return 0;
    }
    const hue =
      id
        .split("")
        .map(s => s.charCodeAt(0))
        .reduce((a, b) => a + b) % 360;

    return hue;
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 50);
  }, [messages]);

  return (
    <main className={styles.main}>
      <Helmet title='Chat App | Messages' />

      <div className={styles.messages}>
        {messages.map(message => {
          return (
            <Message
              key={message.id}
              {...message}
              backgroundColor={idToHue(message.user.id)}
              currentUser={user}
              messageId={message.id}
            />
          );
        })}
      </div>
      <ScrollDownBtn />
    </main>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default MessageList;
