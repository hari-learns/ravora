import LogoMark from './LogoMark';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <LogoMark className={styles.mark} />
                        <p className={styles.copy}>&copy; {new Date().getFullYear()} Ravora Apps OPC Private Limited.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
