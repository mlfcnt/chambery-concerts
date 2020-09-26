import React from "react";
import styles from "../../../../styles/MainDate.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

export default function DecrementButton({ generateHref }) {
  return (
    <Link href={generateHref("subtract")}>
      <a>
        <RiArrowDownSLine className={styles.increment_button} />
      </a>
    </Link>
  );
}
