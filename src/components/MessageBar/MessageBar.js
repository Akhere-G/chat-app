import React from "react";
import styles from "./MessageBar.module.css";
import PropTypes from "prop-types";
import SendIcon from "@material-ui/icons/Send";

const MessageBar = ({ input, setInput, sendMessage }) => {
  return (
    <form
      className={styles.messageForm}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div className={styles.formCenter}>
        <input
          id='input'
          type='text'
          value={input}
          placeholder="What's on your mind?"
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          type='submit'
          onClick={() => {
            sendMessage();
          }}
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

MessageBar.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
export default MessageBar;
