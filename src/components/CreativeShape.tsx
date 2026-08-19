import styles from './CreativeShape.module.css';

/**
 * The hero cube. The T.S. Eliot motive it used to hide in a hover popup now
 * has its own section on the home page — it is the studio's stated reason for
 * building, which is not something to bury behind a hover on a decoration.
 */
export default function CreativeShape() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />
      <div className={styles.scene}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`} />
          <div className={`${styles.face} ${styles.back}`} />
          <div className={`${styles.face} ${styles.right}`} />
          <div className={`${styles.face} ${styles.left}`} />
          <div className={`${styles.face} ${styles.top}`} />
          <div className={`${styles.face} ${styles.bottom}`} />
        </div>
      </div>
    </div>
  );
}
