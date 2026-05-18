import ProjectCard from '@/components/ProjectCard';
import CreativeShape from '@/components/CreativeShape';
import WaveText from '@/components/WaveText';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Modern solutions, <br />
            <span className={styles.highlight}>accelerated with AI.</span>
          </h1>
          <p className={styles.subtitle}>
            Driven by the joy of creation, we build great things solving problems.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <CreativeShape />
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.featuredProject}>
          <div className={styles.featuredHeader}>
            <div>
              <p className={styles.eyebrow}>Main project</p>
              <h2 className={styles.featuredTitle}>Aubstrac by Ravora Apps</h2>
            </div>
            <a
              href="https://aubstrac.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredArrow}
              aria-label="Open Aubstrac"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className={styles.featuredDescription}>
            Aubstrac is a Ravora Apps product that helps users receive merchant-funded
            rewards as digital gold and silver. Through the “save while you spend” model,
            eligible partner-merchant transactions can unlock digital gold or silver purchased
            for the user through Augmont.
          </p>
          <div className={styles.featuredLinks} aria-label="Aubstrac links">
            <a href="https://aubstrac.com" target="_blank" rel="noopener noreferrer">
              Visit Aubstrac
            </a>
            <a href="https://aubstrac.com/digital-gold" target="_blank" rel="noopener noreferrer">
              Digital Gold
            </a>
            <a href="https://aubstrac.com/terms" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <ProjectCard
            title="Wireneurons"
            description="AI-powered platform for Chartered Accountants."
            href="https://wireneurons.com"
          />
          <ProjectCard
            title="Wishlize"
            description="Give life to your customers wishes"
            isComingSoon={true}
          />
        </div>
        <div className={styles.more}>
          <WaveText text="And more in the pipeline..." />
        </div>
      </section>
    </div>
  );
}
