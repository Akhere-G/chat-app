import React, { useState, useEffect } from "react";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";
import { Header, MessageList, MessageBar, Login } from "./components/";

const userKey = "user";
const getUser = () => {
  let user = localStorage.getItem(userKey);
  user = JSON.parse(user);

  return user;
};

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
  }, []);

  useEffect(() => {
    const textUser = JSON.stringify(user);
    localStorage.setItem(userKey, textUser);
  }, [user]);

  const sendMessage = () => {
    if (input) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("messages").add({
        message: input,
        user: user,
        sent: true,
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
      <Header setUser={setUser} />
      <MessageList messages={messages} user={user} />
      <MessageBar input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
export default App;
