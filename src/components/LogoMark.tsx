import Image from 'next/image';
import styles from './LogoMark.module.css';

interface LogoMarkProps {
    className?: string;
    animated?: boolean;
    priority?: boolean;
}

export default function LogoMark({ className = '', animated = false, priority = false }: LogoMarkProps) {
    return (
        <span className={[styles.mark, animated ? styles.animated : '', className].filter(Boolean).join(' ')}>
            <span className={styles.logoLayer}>
                <Image
                    src="/ravora.svg"
                    alt="Ravora Apps"
                    width={96}
                    height={96}
                    priority={priority}
                    className={styles.image}
                />
            </span>
            {animated ? (
                <span className={styles.cubeLayer} aria-hidden="true">
                    <span className={styles.scene}>
                        <span className={styles.cube}>
                            <span className={`${styles.face} ${styles.front}`} />
                            <span className={`${styles.face} ${styles.back}`} />
                            <span className={`${styles.face} ${styles.right}`} />
                            <span className={`${styles.face} ${styles.left}`} />
                            <span className={`${styles.face} ${styles.top}`} />
                            <span className={`${styles.face} ${styles.bottom}`} />
                        </span>
                    </span>
                </span>
            ) : null}
        </span>
    );
}
