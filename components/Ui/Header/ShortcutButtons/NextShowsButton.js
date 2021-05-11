import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SuperCoolButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 8px;
  border: 4px solid #f4e9da;
  background-color: #273253;
  color: #f4e9da;

  &:hover {
    color: #ed5c4d;
    border: 4px solid #ed5c4d;
    cursor: pointer;
  }
`;

export default function NextShowsButton() {
  return (
    <Link href="/prochains-concerts">
      <a>
        <SuperCoolButton>Prochains concerts</SuperCoolButton>
      </a>
    </Link>
  );
}
