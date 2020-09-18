import React from "react";
import { useRouter } from "next/router";

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
