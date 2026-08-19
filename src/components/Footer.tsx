import Link from 'next/link';
import styles from './Footer.module.css';

const PRODUCTS = [
  { label: 'Wireneurons', href: 'https://wireneurons.com' },
  { label: 'Aubstrac', href: 'https://aubstrac.com' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.name}>Ravora Apps</p>
            <p className={styles.tagline}>
              A creative studio building products that solve real problems.
            </p>
          </div>

          <nav className={styles.column} aria-label="Studio">
            <p className={styles.heading}>Studio</p>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </nav>

          <nav className={styles.column} aria-label="Products">
            <p className={styles.heading}>Products</p>
            {PRODUCTS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.column}>
            <p className={styles.heading}>Get in touch</p>
            <a href="mailto:hello@ravoraapps.tech" className={styles.email}>
              hello@ravoraapps.tech
            </a>
            <p className={styles.location}>Chennai, India</p>
          </div>
        </div>

        <div className={styles.base}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Ravora Apps OPC Private Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
