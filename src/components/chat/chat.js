import styles from "./chat.module.css";

function Chat() {
  return (
    <div>
      <div className={styles.chat}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Message key={i} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputMessage}
          type="text"
          placeholder="Type your message..."
        />
        <button>Send</button>
      </div>
    </div>
  );
}
function Message() {
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles.picContainer}>
          <img
            src="profile.webp" // Reference from the public folder
            alt="profile"
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <p>
            this is a very long message, this is a very long message this is a
            very long message, this is a very long message
          </p>
          <button className={styles.online} />
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.picContainer}>
          <img
            src="second.jpg" // Reference from the public folder
            alt="profile"
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <p>
            this is a very long message, this is a very long message this is a
            very long message, this is a very long message
          </p>
          <button className={styles.online} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
