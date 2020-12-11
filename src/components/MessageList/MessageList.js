import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Message from "./Message/Message";
import styles from "./MessageList.module.css";
import ScrollDownBtn from "./ScrollDownBtn/ScrollDownBtn";
const MessageList = ({ messages, user }) => {
  const idToHue = id => {
    const hue =
      (id
        .split("")
        .map(s => s.charCodeAt(0))
        .reduce((a, b) => a + b) %
        36) *
      10;

    return hue;
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 50);
  }, [messages]);

  return (
    <main className={styles.main}>
      <div className={styles.messages}>
        {messages.map(message => {
          return (
            <Message
              key={message.id}
              {...message}
              backgroundColor={idToHue(message.user.id)}
              currentUser={user}
            />
          );
        })}
      </div>
      <ScrollDownBtn />
    </main>
  );
};

MessageList.propTypes = {};

export default MessageList;
