import styles from "./footer.module.css";
import Button from "./button/button";

export default function Footer({ setMessage, setMessages, message, messages }) {
  const handleSend = () => {
    if (message.trim() === "") return; // Do nothing if message is empty
    setMessages([...messages, { text: message, type: "outgoing" }]);
    setMessage(""); // Clear input field
  };

  return (
    <div className={styles.footer}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputMessage}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} />
      </div>
    </div>
  );
}
