import styles from './WaveText.module.css';

interface WaveTextProps {
    text: string;
}

export default function WaveText({ text }: WaveTextProps) {
    return (
        <div className={styles.waveWrapper}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={styles.char}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
}
