'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoMark from './LogoMark';
import styles from './Header.module.css';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Header() {
  const pathname = usePathname() || '/';

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/" className={styles.brand} aria-label="Ravora Apps home">
            <LogoMark priority />
            <span className={styles.wordmark}>
              Ravora
              <span className={styles.wordmarkSub}>Apps</span>
            </span>
          </Link>

          <div className={styles.links}>
            {LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.link}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a href="mailto:hello@ravoraapps.tech" className={styles.cta}>
              Start a project
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
