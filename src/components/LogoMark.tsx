import Image from 'next/image';
import styles from './LogoMark.module.css';

interface LogoMarkProps {
    className?: string;
    priority?: boolean;
}

export default function LogoMark({ className = '', priority = false }: LogoMarkProps) {
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
