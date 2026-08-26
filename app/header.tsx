'use client';

import type { MouseEvent } from 'react';

const links = [
  ['about', 'ABOUT ME'],
  ['uxui', 'UX/UI PROJECT'],
  ['marketing', 'PR/MARKETING PROJECT'],
  ['contact', 'CONTACT'],
] as const;

function moveTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;

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
      <a className="brand" href="#top" aria-label="홈으로 이동" onClick={(event) => moveTo(event, 'top')}>HeeJi SHiN</a>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {links.map(([id, label]) => (
          <a href={`#${id}`} onClick={(event) => moveTo(event, id)} key={id}>{label}</a>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary>MENU</summary>
        <nav aria-label="모바일 메뉴">
          {links.map(([id, label]) => (
            <a href={`#${id}`} onClick={(event) => moveTo(event, id)} key={id}>{label}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}
