import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

const description =
  'Ravora Apps is a creative studio in Chennai that builds and operates its own products — thoughtful, purposeful software accelerated with AI.';

export const metadata: Metadata = {
  title: 'About | Ravora Apps',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Ravora Apps',
    description,
    url: 'https://ravoraapps.tech/about',
    type: 'profile',
  },
};

export default function About() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <header className={styles.head}>
        <p className="eyebrow">About</p>
        <h1 className={styles.title}>
          A studio run on the joy of creation.
        </h1>
        <p className={styles.lead}>
          Ravora Apps is a creative studio. We believe technology can be genuinely useful when the
          work behind it is thoughtful, purposeful, and built with care.
        </p>
      </header>

      <div className={styles.body}>
        <div className={styles.prose}>
          <p>
            We build and operate our own products rather than shipping work and walking away. That
            changes how we make decisions: everything we put in has to be something we are willing
            to maintain, support, and stand behind years from now.
          </p>
          <p>
            By leveraging AI we compress the distance between an idea and a working product — not
            to skip the thinking, but to spend more of our time on the part that actually matters.
            The result is classy, modern software that solves real problems for real people.
          </p>
          <p>
            If you have an idea,{' '}
            <a href="mailto:hello@ravoraapps.tech" className={styles.inlineLink}>
              we can bring it to life
            </a>
            .
          </p>
        </div>

        <aside className={styles.aside}>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Entity</dt>
              <dd>Ravora Apps OPC Private Limited</dd>
            </div>
            <div className={styles.fact}>
              <dt>Based in</dt>
              <dd>Chennai, India</dd>
            </div>
            <div className={styles.fact}>
              <dt>Contact</dt>
              <dd>
                <a href="mailto:hello@ravoraapps.tech" className={styles.inlineLink}>
                  hello@ravoraapps.tech
                </a>
              </dd>
            </div>
          </dl>

          <div className={styles.signature}>
            <p className={styles.signatureName}>Founder</p>
            <p className={styles.signatureMeta}>Ravora Apps · Chennai, India</p>
          </div>

          <Link href="/contact" className={styles.asideCta}>
            Start a conversation
          </Link>
        </aside>
      </div>
    </div>
  );
}
