import styles from "./header.module.css";
import Image from "next/image";

function Header() {
  const status = "online";
  const id = 100;
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.profilePic}>
          <Image
            src={`https://picsum.photos/50?random=${id}`}
            width={50}
            height={50}
            alt={"username"}
            className={styles.profileImage}
          />
          {/* Status indicator */}
          <div
            className={status == "online" ? styles.online : styles.offline}
          ></div>
        </div>
        <div className={styles.info}>
          <h3>username</h3>
          {/* <span className={styles.nickname}>@nickname</span> */}
          <div className={styles.online} />
        </div>
      </div>
    </div>
  );
}

export default Header;
