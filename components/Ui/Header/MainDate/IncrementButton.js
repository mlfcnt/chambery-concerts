import React from "react";
import styles from "../../../../styles/MainDate.module.css";
import { RiArrowUpSLine } from "react-icons/ri";
import Link from "next/link";

export default function IncrementButton({ generateHref }) {
  return (
    <Link href={generateHref("add")}>
      <a>
        <RiArrowUpSLine className={styles.increment_button} />
      </a>
    </Link>
  );
}
