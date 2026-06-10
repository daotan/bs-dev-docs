import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const HERO_TAGS = ['Shopify Themes', 'Liquid', 'Remix Apps', 'Core Web Vitals', 'PageSpeed'];

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          BS Docs · Dev Team
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          <span className={styles.accent}>BSS</span> Developer
          <br />
          Knowledge Base
        </Heading>
        <p className={styles.heroSubtitle}>
          // Shopify themes, apps &amp; performance
          <br />
          optimization — all in one place
        </p>
        <div className={styles.heroTags}>
          {HERO_TAGS.map((tag) => (
            <span key={tag} className={styles.heroTag}>{tag}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.ctaPrimary)}
            to="/docs/Devdocs/Optimize/treo">
            Start reading →
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.ctaSecondary)}
            to="/guide">
            Guide Slides
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Home — ${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
