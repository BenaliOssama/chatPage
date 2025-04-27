"use client"

import styles from "./chat.module.css";
import Header from "./header/header"
import Footer from "./footer/footer"
import ChatBody from "./chatBody/chatBody";

function Chat() {
  return (
    <div className={styles.relative}>
      <Header />
      <ChatBody />
      <Footer />
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
        <div className={`${styles.info} ${styles.a}`}>
          <p>
            this is a very long message, this is a very long message this is a
            very long message, this is a very long message
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default Chat;
