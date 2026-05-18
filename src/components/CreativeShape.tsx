import styles from './CreativeShape.module.css';

export default function CreativeShape() {
    return (
        <div className={styles.reveal} tabIndex={0} aria-describedby="ravora-motive">
            <div className={styles.scene}>
                <div className={styles.cube}>
                    <div className={`${styles.face} ${styles.front}`}></div>
                    <div className={`${styles.face} ${styles.back}`}></div>
                    <div className={`${styles.face} ${styles.right}`}></div>
                    <div className={`${styles.face} ${styles.left}`}></div>
                    <div className={`${styles.face} ${styles.top}`}></div>
                    <div className={`${styles.face} ${styles.bottom}`}></div>
                </div>
            </div>
            <div className={styles.motivePopup} id="ravora-motive">
                <p className={styles.quote}>
                    &quot;We shall not cease from exploration, And the end of all our exploring
                    Will be to arrive where we started, And know the place for the first time&quot;
                </p>
                <p className={styles.credit}>- T.S. Eliot</p>
                <p className={styles.motive}>
                    The quote is our motive in creating useful products.
                </p>
            </div>
        </div>
    );
}
