import Image from 'next/image';
import styles from './LogoMark.module.css';

/**
 * The mark is deliberately static. It previously cross-faded into a spinning
 * cube on a 10s loop, which pulled the eye to the corner of every page and
 * made the brand read as unsettled — the header is the one place on the site
 * that should never move.
 */
export default function LogoMark({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={[styles.mark, className].filter(Boolean).join(' ')}>
      <Image
        src="/ravora.svg"
        alt="Ravora Apps"
        width={96}
        height={96}
        priority={priority}
        className={styles.image}
      />
    </span>
  );
}
