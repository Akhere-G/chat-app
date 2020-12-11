import React, { useState, useEffect } from "react";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";
import { Header, MessageList, MessageBar, Login } from "./components/";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const colors = [];

  for (let i = 0; i < 36; i++) {
    colors.push([i * 10, "100%", "63%"]);
  }

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
  }, []);

  const sendMessage = () => {
    if (input) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
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
      <Header />
      <MessageList messages={messages} user={user} />
      <MessageBar input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
export default App;
