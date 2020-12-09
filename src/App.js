import React, { useState, useEffect } from "react";
import Message from "./components/Message";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";
import Login from "./components/Login";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const colors = [];

  for (let i = 0; i < 36; i++) {
    colors.push([i * 10, "100%", "63%"]);
  }

  const idToHue = (id = "abcde") => {
    if (!id) {
      id = "abcde";
    }
    const hue =
      id
        .split("")
        .map(s => s.charCodeAt(0))
        .reduce((a, b) => a + b) % 36;

    return hue;
  };
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });

    if (user) {
      console.log(user.id, idToHue(user.id));
    }
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const sendMessage = () => {
    if (input) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      console.log(timestamp);
      db.collection("messages").add({
        message: input,
        user: user,
        timestamp,
      });
    }
    setInput("");
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className='page-container'>
      <header className='header'>
        <h1>Chat App</h1>
      </header>
      <main className='main'>
        <div className='messages'>
          {messages.map(message => {
            return (
              <Message
                key={message.id}
                {...message}
                color={idToHue(message.id)}
                currentUser={user}
              />
            );
          })}
        </div>
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
      </main>
    </div>
  );
}
export default App;
