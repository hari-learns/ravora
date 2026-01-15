import ProjectCard from '@/components/ProjectCard';
import CreativeShape from '@/components/CreativeShape';
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
            We build software that simplifies complex problems.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <CreativeShape />
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.grid}>
          <ProjectCard
            title="Lemonade Stand News"
            description="Your daily news, simplified. In your language, in your style."
            href="https://lemonadestandnews.com"
          />
          <ProjectCard
            title="Wishlize"
            description="Give life to your customers wishes"
            isComingSoon={true}
          />
        </div>
        <div className={styles.more}>
          <p>And more in the pipeline...</p>
        </div>
      </section>
    </div>
  );
}
