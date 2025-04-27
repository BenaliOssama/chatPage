import styles from "./page.module.css";
import Profile from "../components/profile/profile"
import Contacts from "../components/contacts/contacs"
import Chat from "../components/chat/chat"

export default function Home() {
  return (
    <div className={styles.container}>
      <Side />
      <Main />
    </div>
  );
}

function Side() {
  return (
    <div className={styles.side}>
      <Profile />
      <Contacts />
    </div>
  );
}




function Main() {
  return (
    <div className={styles.main}>
      <Chat />
    </div>
  );
}

