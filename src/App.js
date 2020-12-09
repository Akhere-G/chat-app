import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import Message from "./components/Message";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser("Akhere Ihoeghinlan");
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const sendMessage = e => {
    if (input) {
      db.collection("messages").add({
        message: input,
        username: user,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
    e.target.scrollIntoView();
  };

  return (
    <div className='page-container'>
      <header className='header'>
        <h1>Chat App</h1>
      </header>
      <main className='main'>
        <div className='messages'>
          {messages.map(message => {
            return <Message key={message.id} {...message} currentUser={user} />;
          })}
        </div>
        <form
          className='messageForm'
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl>
            <Input
              id='input'
              type='text'
              value={input}
              placeholder="What's on your mind?"
              onChange={e => {
                setInput(e.target.value);
              }}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              onClick={e => {
                sendMessage(e);
              }}
            >
              send
            </Button>
          </FormControl>
        </form>
      </main>
    </div>
  );
}
export default App;
