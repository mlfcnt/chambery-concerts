import React from 'react';
import Link from 'next/link';
import { SuperCoolButton } from '../../SuperCoolButton';

export default function NextShowsButton() {
  return (
    <Link href="/prochains-concerts">
      <a>
        <SuperCoolButton>Prochains concerts</SuperCoolButton>
      </a>
    </Link>
  );
}
