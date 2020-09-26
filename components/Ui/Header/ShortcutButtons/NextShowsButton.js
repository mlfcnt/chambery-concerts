import React from "react";
import Link from "next/link";

export default function NextShowsButton() {
  return (
    <Link href="/prochains-concerts">
      <a>
        <button>Prochains concerts</button>
      </a>
    </Link>
  );
}
