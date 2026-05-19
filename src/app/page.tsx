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
        <section className={styles.aubstracSection} aria-labelledby="aubstrac-title">
          <div className={styles.aubstracHeader}>
            <div className={styles.aubstracIntro}>
              <h2 id="aubstrac-title" className={styles.aubstracTitle}>Aubstrac by Ravora</h2>
              <p>
                Aubstrac helps users receive merchant-funded rewards as digital gold and
                silver. Through the “save while you spend” model, eligible partner-merchant
                transactions can unlock digital gold or silver purchased for the user through
                Augmont.
              </p>
            </div>
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

          <div className={styles.assetFlow}>
            <div className={styles.flowCopy}>
              <h3>How digital assets are purchased</h3>
              <ul>
                <li>User shops with an eligible Aubstrac partner merchant.</li>
                <li>The merchant funds the applicable reward amount.</li>
                <li>Aubstrac calculates the eligible gold or silver value.</li>
                <li>Digital gold or silver is purchased for the user through Augmont Goldtech Private Limited.</li>
                <li>The user can view the credited balance in their Aubstrac account.</li>
              </ul>
            </div>
            <div className={styles.assetVisual} aria-hidden="true">
              <div className={styles.coinStack}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.purchasePulse}></div>
              <div className={styles.assetLedger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className={`${styles.assetFlow} ${styles.sellFlow}`}>
            <div className={styles.assetVisual} aria-hidden="true">
              <div className={styles.assetToken}></div>
              <div className={styles.sellRail}>
                <span></span>
              </div>
              <div className={styles.settlementLines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.flowCopy}>
              <h3>How those assets can be sold</h3>
              <ul>
                <li>User opens their Aubstrac account and reviews the available balance.</li>
                <li>User chooses the gold or silver quantity to sell or redeem, where enabled.</li>
                <li>Aubstrac routes the request through the partnered digital metal provider.</li>
                <li>Value is processed as per provider terms, taxes, fees, and settlement timelines.</li>
                <li>User receives the applicable proceeds or benefit after successful processing.</li>
              </ul>
            </div>
          </div>

          <p className={styles.complianceNote}>
            Purchase, sale, redemption, and custody of digital gold and silver are handled by
            Augmont Goldtech Private Limited. Aubstrac coordinates merchant-funded reward
            collection, settlement, and distribution with Augmont and eligible users. All
            services remain subject to applicable provider terms, KYC, taxes, charges, and
            settlement rules.
          </p>
        </section>

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
