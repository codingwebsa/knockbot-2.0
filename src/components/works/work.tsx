"use client";

import styles from "~/styles/work.module.css";

export default function Work({ index, title, setModal }: any) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
