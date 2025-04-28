"use client";

import styles from "./chat.module.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import ChatBody from "./chatBody/chatBody";
import { useState } from "react";

function Chat({ id }) {
  // fetch some data  ?
  const name = "test name";
  const status = "online";
  const image = "";

  const [message, setMessage] = useState(""); // State for input field
  const [messages, setMessages] = useState([
    // Example messages, these can be dynamic
    { text: "Hello, how can I assist you today?", type: "incoming" },
    { text: "I have a question about your services.", type: "outgoing" },
    {
      text: "Sure, I'm here to help. What would you like to know?",
      type: "incoming",
    },
  ]);

  return (
    <div className={styles.relative}>
      <Header id={id} name={name} image={image} status={status} />
      <ChatBody id={id} message={message} messages={messages} />
      <Footer
        setMessage={setMessage}
        setMessages={setMessages}
        message={message}
        messages={messages}
      />
    </div>
  );
}

export default Chat;
