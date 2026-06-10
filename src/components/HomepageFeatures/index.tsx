import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

const FeatureList: FeatureItem[] = [
  {
    icon: '🎨',
    title: 'Shopify Themes & Liquid',
    description:
      'Deep dive into Liquid templating, sections, blocks, metafields, and OS 2.0 theme architecture for production-grade Shopify stores.',
    link: '/docs/Devdocs/Shopify/themes/intro',
    tags: ['Liquid', 'Sections', 'Metafields', 'OS 2.0'],
  },
  {
    icon: '⚡',
    title: 'Performance & Speed',
    description:
      'Analyze and optimize Core Web Vitals with PageSpeed Insights, Treo, Lighthouse, Chrome DevTools, and WebPageTest.',
    link: '/docs/Devdocs/Optimize/treo',
    tags: ['PageSpeed', 'Core Web Vitals', 'Lighthouse', 'Treo'],
  },
  {
    icon: '🔌',
    title: 'App Development',
    description:
      'Build Shopify apps using the Remix framework, configure OAuth access scopes, and ship UI with Polaris design components.',
    link: '/docs/Devdocs/Shopify/apps/intro',
    tags: ['Remix', 'Polaris', 'OAuth', 'GraphQL'],
  },
];

function Feature({ icon, title, description, link, tags }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <span className={styles.featureIcon}>{icon}</span>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDesc}>{description}</p>
        <div className={styles.featureTags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.featureArrow}>Explore docs →</div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>// Documentation</span>
          <h2 className={styles.sectionTitle}>What's inside</h2>
          <p className={styles.sectionSubtitle}>
            Technical guides for Shopify & performance-focused developers
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
