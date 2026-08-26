'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';

const links = [
  ['about', 'ABOUT ME'],
  ['uxui', 'UX/UI PROJECT'],
  ['marketing', 'PR/MARKETING PROJECT'],
  ['contact', 'CONTACT'],
] as const;

function moveTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) {
    event.preventDefault();
    window.location.assign(event.currentTarget.href);
    return;
  }

  event.preventDefault();
  target.scrollIntoView({ behavior: 'auto', block: 'start' });
  window.history.replaceState(null, '', id === 'top' ? window.location.pathname : `#${id}`);
  event.currentTarget.closest('details')?.removeAttribute('open');
}

export default function Header() {
  return (
    <header
      className="site-header"
      style={{
        backdropFilter: 'blur(var(--header-blur, 20px))',
        WebkitBackdropFilter: 'blur(var(--header-blur, 20px))',
      }}
    >
      <Link className="brand" href="/" prefetch={false} aria-label="홈으로 이동" onClick={(event) => moveTo(event, 'top')}>HeeJi SHiN</Link>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {links.map(([id, label]) => (
          <Link href={`/#${id}`} prefetch={false} onClick={(event) => moveTo(event, id)} key={id}>{label}</Link>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary>MENU</summary>
        <nav aria-label="모바일 메뉴">
          {links.map(([id, label]) => (
            <Link href={`/#${id}`} prefetch={false} onClick={(event) => moveTo(event, id)} key={id}>{label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
