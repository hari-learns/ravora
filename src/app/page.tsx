import type { ReactNode } from 'react';
import Link from 'next/link';
import CreativeShape from '@/components/CreativeShape';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import WaveText from '@/components/WaveText';
import styles from './page.module.css';

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Wireneurons',
    description: 'An AI-powered platform for Chartered Accountants — built around the work they actually do.',
    discipline: 'Product · Live',
    href: 'https://wireneurons.com',
  },
  {
    index: '02',
    title: 'Aubstrac',
    description: 'Effortless wealth. A save-while-you-spend engine that turns everyday payments into gold customers own.',
    discipline: 'Product · Live',
    href: 'https://aubstrac.com',
  },
  {
    index: '03',
    title: 'Wishlize',
    description: 'Giving life to what your customers wish for, before they have to ask twice.',
    discipline: 'Product',
    status: 'Coming soon',
  },
];

const PRINCIPLES: { title: string; body: ReactNode }[] = [
  {
    title: 'Built with a motive',
    body: 'Every build starts with a reason, not a brief. Mail us the idea and we will build you a high-quality demo of it, free.',
  },
  {
    title: 'Accelerated with AI',
    body: 'We cracked it. Product, innovation and market move at the same time as the code, because the heavy lifting is done by machines that never get tired.',
  },
  {
    title: 'Giving form and life to your ideas',
    body: (
      <>
        We build the wonderful things that you could frame only in your mind — and we deliver in{' '}
        <s className={styles.strike}>months</s> days. Not a claim about working harder; the tooling
        genuinely changed, and delivery timelines changed with it.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className="eyebrow">Creative studio · Chennai, India</p>
            <h1 className={styles.title}>
              Modern solutions,
              <br />
              <span className={styles.highlight}>accelerated with AI.</span>
            </h1>
            <p className={styles.subtitle}>
              Driven by the joy of creation, we build the wonderful things that you could frame
              only in your mind.
            </p>
            <div className={styles.actions}>
              <Link href="#work" className={styles.primary}>
                See our work
              </Link>
              <a href="mailto:hello@ravoraapps.tech" className={styles.secondary}>
                hello@ravoraapps.tech
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <CreativeShape />
          </div>
        </div>
      </section>

      <section className={styles.motive} aria-labelledby="motive-title">
        <div className={`container ${styles.motiveInner}`}>
          <h2 id="motive-title" className="eyebrow">
            Our motive
          </h2>
          <blockquote className={styles.quote}>
            <p>
              &ldquo;We shall not cease from exploration, and the end of all our exploring will be
              to arrive where we started, and know the place for the first time.&rdquo;
            </p>
            <cite className={styles.credit}>T.S. Eliot</cite>
          </blockquote>
        </div>
      </section>

      <section id="work" className={styles.work} aria-labelledby="work-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Work</p>
            <h2 id="work-title" className={styles.sectionTitle}>
              Products we own and operate.
            </h2>
          </div>

          <Reveal as="ul" className={styles.grid}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </Reveal>

          <div className={styles.more}>
            <WaveText text="And more in the pipeline..." />
          </div>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="approach-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">How we work</p>
            <h2 id="approach-title" className={styles.sectionTitle}>
              Three reasons to send us your idea.
            </h2>
          </div>

          <Reveal as="ul" className={styles.principles}>
            {PRINCIPLES.map((item, i) => (
              <li key={item.title} className={styles.principle}>
                <span className={styles.principleIndex}>{`0${i + 1}`}</span>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleBody}>{item.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <h2 id="cta-title" className={styles.ctaTitle}>
            Got an idea? Let&apos;s bring it to life.
          </h2>
          <p className={styles.ctaBody}>
            Partnerships, custom builds, or a quick chat about something you have been thinking
            about — all reach the same inbox.
          </p>
          <a href="mailto:hello@ravoraapps.tech" className={styles.ctaButton}>
            hello@ravoraapps.tech
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
