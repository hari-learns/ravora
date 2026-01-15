import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copy}>&copy; {new Date().getFullYear()} Ravora Apps OPC Private Limited.</p>
                    <div className={styles.credit}>
                        Crafted with love
                    </div>
                </div>
            </div>
        </footer>
    );
}
