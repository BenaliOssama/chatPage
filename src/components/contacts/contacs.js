"use client";

import styles from "./contacs.module.css";
import Image from "next/image";
import ChatPopup from "./ChatPopup/ChatPopup.jsx"; // Import the ChatPopup component
import { GetContacts } from "@/services/contacts";
import { useState, useEffect, useRef } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await GetContacts();
      console.log("contact fetched:", fetchedContacts);
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
  const [chatPosition, setChatPosition] = useState(null);
  const contactRef = useRef(null);

  const handleContactClick = (e) => {
    if (contactRef.current) {
      const rect = contactRef.current.getBoundingClientRect();
      const popupWidth = 300; // Example width of the chat popup
      const popupHeight = 290; // Example height (if needed)

      let top = rect.top;
      let left = rect.right + 10;

      // If not enough space on the right, show the popup on the left
      if (left + popupWidth > window.innerWidth) {
        left = rect.left - popupWidth - 10;
      }

      // Optional: adjust top if popup goes off bottom
      if (top + popupHeight > window.innerHeight) {
        top = window.innerHeight - popupHeight - 10;
        if (top < 0) top = 10; // Don't go above the screen
      }

      setChatPosition({ top, left });
    }
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Contact Item */}
      <div
        className={styles.contact}
        onClick={handleContactClick}
        ref={contactRef}
      >
        <div className={styles.profilePic}>
          <Image
            src={`https://picsum.photos/50?random=${id}`}
            width={50}
            height={50}
            alt={name}
            className={styles.profileImage}
          />
          {/* Status indicator */}
          <div
            className={status === "online" ? styles.online : styles.offline}
          ></div>
        </div>
        <div className={styles.info}>
          <p>{name}</p>
        </div>
      </div>

      {/* Chat Popup */}
      {isChatOpen && chatPosition && (
        <ChatPopup
          name={name}
          position={chatPosition} // Pass the dynamic position
          onClose={handleCloseChat} // Close function
        />
      )}
    </>
  );
}

export default Contacts;
