import React, { useRef, useEffect } from "react";
import styles from "./chatBody.module.css"; // Ensure you create the CSS file and import it

const ChatBody = ({ id, message, messages }) => {
  const cardRef = useRef(); // create a ref for the card

  useEffect(() => {
    console.log("messages changes", messages);
    if (cardRef.current) {
      cardRef.current.scrollTo({
        top: cardRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]); // Scroll to bottom whenever messages change

  return (
    <div className={styles["chat-card"]} ref={cardRef}>
      {/* Chat Body */}
      <div className={styles["chat-body"]}>
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
