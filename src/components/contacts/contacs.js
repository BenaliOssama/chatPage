import styles from "./contacs.module.css";

function Contacs() {
  return (
    <div className={styles.contacts}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Contact key={i} />
      ))}
    </div>
  );
}
function Contact() {
    return (
      <div className={styles.contact}>
        <div className={styles.picContainer}>
          <img
            src="profile.webp" // Reference from the public folder
            alt="profile"
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <p>user name</p>
          <button className={styles.online} />
        </div>
      </div>
    );
}

export default Contacs;
