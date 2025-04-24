import styles from './ChatPopup.module.css';

function ChatPopup({ name, onClose }) {
  return (
    <div className={styles.chatPopup}>
      <div className={styles.chatHeader}>
        <p>Chat with {name}</p>
        <button onClick={onClose}>Close</button>
      </div>
      <div className={styles.chatBody}>
        {/* Chat content goes here */}
        <p>This is the chat window. You can send messages here!</p>
      </div>
    </div>
  );
}

export default ChatPopup;
