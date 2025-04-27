"use client";

import styles from "./page.module.css";
import Profile from "../components/profile/profile";
import Contacts from "../components/contacts/contacs";
import Chat from "../components/chat/chat";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState(null);
  return (
    <div className={styles.container}>
      <Side setId={setId} />
      <Main id={id} />
    </div>
  );
}

function Side({ setId }) {
  return (
    <div className={styles.side}>
      <Profile />
      <Contacts setId={setId} />
    </div>
  );
}

function Main({ id }) {
  return (
    <div className={styles.main}>
      {!id && <div className={styles.search}>Search</div>}
      {id && <Chat id={id} />}
    </div>
  );
}
