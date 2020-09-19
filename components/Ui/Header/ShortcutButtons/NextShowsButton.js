import React from "react";
import { useRouter } from "next/router";
import { Button } from "carbon-components-react";
import styles from "../../../../styles/ShortcutButtons.module.css";

export default function NextShowsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/prochains-concerts");
      }}
    >
      Prochains concerts
    </button>
  );
}
