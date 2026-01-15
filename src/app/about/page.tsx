import styles from './page.module.css';

export default function About() {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <section className={styles.content}>
                    <h1 className={styles.title}>About Ravora</h1>

                    <div className={styles.prose}>
                        <p className={styles.lead}>
                            A company ran by one man, letting his creative thoughts come to life as solutions.
                        </p>

                        <hr className={styles.divider} />

                        <p>
                            Ravora Apps is not a traditional software house. It is a creative studio where ideas match execution.
                            We believe that tech solutions can be unique and innovative, as long as the service is sweet and serves a purpose.
                        </p>

                        <p>
                            By leveraging the power of Artificial Intelligence, we accelerate the development of
                            classy, modern applications that solve real-world problems.
                        </p>

                        <div className={styles.signature}>
                            <p>Hariharan RP</p>
                            <p className={styles.location}>Chennai, India</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
