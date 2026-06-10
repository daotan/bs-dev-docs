import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BS Documents',
  tagline: 'Shopify development, performance & app engineering docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url:  `https://${process.env.VERCEL_URL || "your-docusaurus-site.example.com"}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bitbucket.org/tandv_bs/treo-sh-speed-tool/commits/branch/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bitbucket.org/tandv_bs/treo-sh-speed-tool/commits/branch/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom'
  ],
  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        margin: 30,
        scrollOffset: 200
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BS Documents',
      logo: {
        alt: 'BS Team Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'devDocsSidebar',
          position: 'left',
          label: 'Dev'
        },
        {
          to: '/guide',
          position: 'left',
          label: 'Guide Slides',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dev Docs',
          items: [
            {
              label: 'Shopify Themes & Liquid',
              to: '/docs/Devdocs/Shopify/themes/intro',
            },
            {
              label: 'App Development',
              to: '/docs/Devdocs/Shopify/apps/intro',
            },
            {
              label: 'Performance & Speed',
              to: '/docs/Devdocs/Optimize/treo',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Shopify Dev',
              href: 'https://shopify.dev',
            },
            {
              label: 'Shopify Community',
              href: 'https://community.shopify.com',
            },
            {
              label: 'MDN Web Docs',
              href: 'https://developer.mozilla.org',
            },
          ],
        },
        {
          title: 'BSS Commerce',
          items: [
            {
              label: 'BSS Commerce',
              href: 'https://bsscommerce.com',
            },
            {
              label: 'Shopify Partner',
              href: 'https://partners.shopify.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BSS Commerce. Made for developers.`,
    },
    prism: {
      additionalLanguages: ['markup-templating', 'liquid', 'toml', 'bash', 'json'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
