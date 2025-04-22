import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
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

export default Header;
