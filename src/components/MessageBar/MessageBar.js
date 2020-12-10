import React from "react";

const MessageBar = ({ input, setInput, sendMessage }) => {
  return (
    <form
      className='messageForm'
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div className='formCenter'>
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
