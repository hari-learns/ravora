import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Ravora Apps',
  description: 'Reach Ravora Apps about partnerships, custom builds, or a quick conversation.',
};

const ROUTES = [
  {
    title: 'New projects',
    body: 'An idea you want built, or a product that needs a team who will stay with it.',
  },
  {
    title: 'Partnerships',
    body: 'Working together on something, or bringing Ravora into an existing product.',
  },
  {
    title: 'Everything else',
    body: 'Questions about our products, press, or just a conversation worth having.',
  },
];

export default function Contact() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <header className={styles.head}>
        <p className="eyebrow">Contact</p>
        <h1 className={styles.title}>Got an idea? Let&apos;s bring it to life.</h1>
        <p className={styles.lead}>
          One inbox, read by the people who build the work. We reply to everything that is
          genuinely addressed to us.
        </p>
      </header>

      <a href="mailto:hello@ravoraapps.tech" className={styles.card}>
        <span className={styles.cardLabel}>Email</span>
        <span className={styles.cardEmail}>hello@ravoraapps.tech</span>
        <span className={styles.cardAction}>
          Write to us
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={styles.cardEdge} aria-hidden="true" />
      </a>

      <ul className={styles.routes}>
        {ROUTES.map((route) => (
          <li key={route.title} className={styles.route}>
            <h2 className={styles.routeTitle}>{route.title}</h2>
            <p className={styles.routeBody}>{route.body}</p>
          </li>
        ))}
      </ul>

      <p className={styles.location}>Ravora Apps OPC Private Limited · Chennai, India</p>
    </div>
  );
}
