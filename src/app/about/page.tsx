import styles from './page.module.css';

export default function About() {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <section className={styles.content}>
                    <h1 className={styles.title}>About Ravora</h1>

                    <div className={styles.prose}>
                        <p className={styles.lead}>
                            A company run on pure excitement and adrenaline, driven by the joy of creation.
                        </p>

                        <hr className={styles.divider} />

                        <p>
                            Ravora apps is a creative studio.
                            We believe technology solutions can be unique and innovative when the service is thoughtful,
                            purposeful, and built with care.
                        </p>

                        <p>
                            By leveraging the power of Artificial Intelligence, we accelerate the development of
                            classy, modern applications that solve real-world problems.
                        </p>

                        <p>
                            If you have an idea, we can bring it to life.
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
