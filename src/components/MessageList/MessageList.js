import React from "react";
import PropTypes from "prop-types";
import Message from "./Message/Message";
const MessageList = ({ messages, user }) => {
  return (
    <div className='messages'>
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
  );
};

MessageList.propTypes = {};

export default MessageList;
