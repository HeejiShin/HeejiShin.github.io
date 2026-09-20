'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
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
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const upwardTravel = useRef(0);
  const downwardTravel = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame = 0;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 40) {
        setHidden(false);
        upwardTravel.current = 0;
        downwardTravel.current = 0;
      } else if (delta > 0) {
        downwardTravel.current += delta;
        upwardTravel.current = 0;

        if (currentScrollY > 100 && downwardTravel.current >= 18) {
          setHidden(true);
        }
      } else if (delta < 0) {
        upwardTravel.current += Math.abs(delta);
        downwardTravel.current = 0;

        if (upwardTravel.current >= 10) {
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`site-header${hidden ? ' site-header--hidden' : ''}`}
      onFocus={() => setHidden(false)}
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
