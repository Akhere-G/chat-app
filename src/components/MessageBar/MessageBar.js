import React from "react";
import styles from "./MessageBar.module.css";
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
          send
        </button>
      </div>
    </form>
  );
};

export default MessageBar;
