"use client";

import styles from "./contacs.module.css";
import Image from "next/image";
import Chat from "@/components/chat/chat";
import { GetContacts } from "@/services/contacts";
import { useState, useEffect, useRef } from "react";

function Contacts({ setId }) {
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
          image={contact.image}
          name={contact.name}
          status={contact.status}
          setId={setId}
        />
      ))}
    </div>
  );
}

function Contact({ id, image, name, status, setId }) {
  image = `https://picsum.photos/50?random=${id}`;

  const contactRef = useRef(null);

  const handleContactClick = (e) => {
    setId(id);
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
            src={image}
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
    </>
  );
}

export default Contacts;
