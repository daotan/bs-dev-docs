import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shopify Basic',
  tagline: 'Learn the basic of Shopify Development',
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
            'https://github.com/FukuwaMitzu/shopify-theme-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/FukuwaMitzu/shopify-theme-docs/tree/master',
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
      title: 'Shopify Basic',
      logo: {
        alt: 'Shopify Basic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'themesSidebar',
          position: 'left',
          label: 'Theme',
        },
        {
          type: 'docSidebar',
          sidebarId: 'appsSidebar',
          position: 'left',
          label: 'Apps',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Shopify Official Documents',
              to: 'https://shopify.dev/docs/themes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Shopify Community',
              href: 'https://community.shopify.com/c/shopify-community/ct-p/en',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/shopify/',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['markup-templating', 'liquid', 'toml', 'bash', 'json'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
