import Link from 'next/link';
import styles from './ProjectCard.module.css';

export interface Project {
  index: string;
  title: string;
  description: string;
  discipline: string;
  href?: string;
  status?: string;
}

export default function ProjectCard({
  index,
  title,
  description,
  discipline,
  href,
  status,
}: Project) {
  const body = (
    <>
      <div className={styles.top}>
        <span className={styles.index}>{index}</span>
        <span className={status ? styles.status : styles.discipline}>{status ?? discipline}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.foot}>
        <span className={styles.action}>
          {href ? 'Visit site' : 'In the pipeline'}
        </span>
        {href ? (
          <svg
            className={styles.arrow}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </div>

      <span className={styles.edge} aria-hidden="true" />
    </>
  );

  if (!href) {
    return <li className={`${styles.card} ${styles.quiet}`}>{body}</li>;
  }

  return (
    <li className={styles.item}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${styles.clickable}`}
      >
        {body}
      </Link>
    </li>
  );
}
