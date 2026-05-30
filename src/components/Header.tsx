import Link from 'next/link';
import LogoMark from './LogoMark';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo} aria-label="Ravora Apps home">
            <LogoMark className={styles.headerMark} priority />
          </Link>
          <div className={styles.links}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
