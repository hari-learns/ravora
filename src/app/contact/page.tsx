import styles from './page.module.css';

export default function Contact() {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <section className={styles.content}>
                    <h1 className={styles.title}>Contact</h1>

                    <div className={styles.prose}>
                        <p className={styles.lead}>
                            Got an idea? Let's bring it to life.
                        </p>

                        <div className={styles.card}>
                            <p className={styles.label}>Email</p>
                            <a href="mailto:hello@ravoraapps.tech" className={styles.email}>
                                hello@ravoraapps.tech
                            </a>
                            <p className={styles.sub}>
                                Reach out regarding partnerships, custom solutions, or a quick chat.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
