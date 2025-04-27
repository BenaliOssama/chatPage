import React from "react";
import styles from "./profile.module.css";
import Image from "next/image";

export default function Profile() {
  const user = {
    fullname: "Jakob Bishop",
    nickname: "Jakob",
    avatar: "https://loremfaces.net/96/id/1.jpg",
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <Image
            className={styles.avatar}
            src={user.avatar}
            alt={user.nickname}
            width={50}
            height={50}
          />
          <div className={styles.profileInfo}>
            <h3>{user.fullname}</h3>
            <span className={styles.nickname}>@{user.nickname}</span>
          </div>
        </div>
        {/* <div className={styles.profileStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{user.followers}</span>
            <span className={styles.statLabel}>Followers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{user.following}</span>
            <span className={styles.statLabel}>Following</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{user.posts}</span>
            <span className={styles.statLabel}>Post</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
