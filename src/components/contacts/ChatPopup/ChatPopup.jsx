import React, { useState } from "react";
import styles from "./ChatPopup.module.css"; // Ensure you create the CSS file and import it

const ChatCard = ({ name, position, onClose }) => {
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

  const handleSend = () => {
    if (message.trim() === "") return; // Do nothing if message is empty
    setMessages([...messages, { text: message, type: "outgoing" }]);
    setMessage(""); // Clear input field
  };

  return (
    <div
      className={styles["chat-card"]}
      style={{
        position: "absolute",
        top : position.top,
        left: position.left, // `position` could be 'left' or 'right'
      }}
    >
      {/* Chat Header */}
      <div className={styles["chat-header"]}>
        <div className={styles.h2}>{name}</div>
      </div>

      {/* Chat Body */}
      <div className={styles["chat-body"]}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.type]}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Chat Footer */}
      <div className={styles["chat-footer"]}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles["chat-input"]}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
