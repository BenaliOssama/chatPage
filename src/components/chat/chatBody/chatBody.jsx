import React, { useState, useRef, useEffect } from "react";
import styles from "./chatBody.module.css"; // Ensure you create the CSS file and import it

const ChatBody = ({ name }) => {
  const cardRef = useRef(); // create a ref for the card
  const chatBodyRef = useRef(); // Add ref for chat body

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

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]); // Scroll to bottom whenever messages change

  const handleSend = () => {
    if (message.trim() === "") return; // Do nothing if message is empty
    setMessages([...messages, { text: message, type: "outgoing" }]);
    setMessage(""); // Clear input field
  };

  return (
    <div className={styles["chat-card"]} ref={cardRef}>
      {/* Chat Body */}
      <div className={styles["chat-body"]} ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.type]}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
