import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Message from "./components/Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "hello guys", id: 1, writter: "steve" },
  ]);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(prompt("What is your name"));
  }, []);

  const sendMessage = () => {
    if (input) {
      setMessages([...messages, { text: input, id: uuidv4(), writter: user }]);
    }
    setInput("");
  };

  return (
    <div className='page-container'>
      <header className='header'>
        <h1>Chat App</h1>{" "}
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
              onClick={sendMessage}
            >
              send
            </Button>
          </FormControl>
        </form>
      </main>
      <footer className='footer'>
        <p>Akhere Ihoeghinlan @ 2020</p>
      </footer>
    </div>
  );
}
export default App;
