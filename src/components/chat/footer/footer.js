import styles from "./footer.module.css";
import Button from "./button/button";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputMessage}
          type="text"
          placeholder="Type your message..."
        />
        <Button/>
      </div>
    </div>
  );
}
