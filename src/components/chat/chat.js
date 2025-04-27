"use client";

import styles from "./chat.module.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import ChatBody from "./chatBody/chatBody";

function Chat({ id }) {
  // fetch some data  ?
  const name = "test name";
  const status = "online";
  const image = "";

  return (
    <div className={styles.relative}>
      <Header id={id} name={name} image={image} status={status} />
      <ChatBody id={id} />
      <Footer />
    </div>
  );
}

export default Chat;
