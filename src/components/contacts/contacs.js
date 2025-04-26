"use client"

import styles from "./contacs.module.css";
import Image from 'next/image'
import ChatPopup from './ChatPopup/ChatPopup.jsx';  // Import the ChatPopup component
import { GetContacts } from "@/services/contacts";
import { useState, useEffect } from 'react';


function Contacs() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await GetContacts();
      console.log('contact fetched:', fetchedContacts);
      setContacts(fetchedContacts);
    };

    fetchContacts();
  }, []);

  return (
    <div className={styles.contacts}>
      {contacts.map((contact, i) => (
        <Contact
          key={i}
          id={contact.id}
          images={contact.image}
          name={contact.name}
          status={contact.status}
        />
      ))}
    </div>
  );
}


function Contact({ id, images, name, status }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      {/* Contact Item */}
      <div className={styles.contact} onClick={handleContactClick}>
        <div className={styles.profilePic}>
          <Image
            src={`https://picsum.photos/50?random=${id}`}
            width={50}
            height={50}
            alt={name}
            className={styles.profileImage}
          />
          {/* Status indicator */}
          <div className={status === "online" ? styles.online : styles.offline}></div>
        </div>
        <div className={styles.info}>
          <p>{name}</p>
        </div>
      </div>

      {/* Chat Popup */}
      {isChatOpen && <ChatPopup name={name} onClose={handleCloseChat} />}
    </div>
  );
}




export default Contacs;
