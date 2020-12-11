import React from "react";
import PropTypes from "prop-types";
import Message from "./Message/Message";
import styles from "./MessageList.module.css";
const MessageList = ({ messages, user }) => {
  return (
    <main className={styles.main}>
      <div className={styles.messages}>
        {messages.map(message => {
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
    </main>
  );
};

MessageList.propTypes = {};

export default MessageList;
