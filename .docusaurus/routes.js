import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '32f'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post', '52e'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two', 'dd4'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss', 'cc0'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss', '673'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0', '581'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/guide',
    component: ComponentCreator('/guide', '9a3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b66'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '75d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'eed'),
            routes: [
              {
                path: '/docs/Devdocs/AI Docs/frontend_optimize_development',
                component: ComponentCreator('/docs/Devdocs/AI Docs/frontend_optimize_development', '9ab'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/cls',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/cls', 'fe7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/cls-optimize',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/cls-optimize', 'dbd'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/inp',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/inp', '188'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/inp-optimize',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/inp-optimize', '95f'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/lcp',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/lcp', 'de6'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Core Web Vitals/optimize-lcp',
                component: ComponentCreator('/docs/Devdocs/Optimize/Core Web Vitals/optimize-lcp', '8a7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools', '94d'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools-solution',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools-solution', '75b'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools-table',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/chrome-devtools-table', 'cdd'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix', '2b7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix-solution',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix-solution', '9f2'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix-table',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/GTmetrix-table', 'be9'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/lighthouse',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/lighthouse', '1a7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/lighthouse-solution',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/lighthouse-solution', '6bf'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/lighthouse-table',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/lighthouse-table', '82c'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights', '9c7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights-solution',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights-solution', 'edd'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights-table',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/pagespeed-insights-table', '052'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/web-page-test',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/web-page-test', '0dd'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/web-page-test-solution',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/web-page-test-solution', '12e'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/Performance Audit Website/web-page-test-table',
                component: ComponentCreator('/docs/Devdocs/Optimize/Performance Audit Website/web-page-test-table', '2a5'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/treo',
                component: ComponentCreator('/docs/Devdocs/Optimize/treo', 'c00'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/cli',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/cli', '11c'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/create-an-app',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/create-an-app', '0a5'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/intro', '222'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/polaris',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/polaris', '418'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/api-access-scope',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/api-access-scope', 'd05'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/api-extension',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/api-extension', '7a6'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/architecture',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/architecture', '009'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/overview',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/overview', '1c6'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Architecture/',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Architecture/', '88f'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/CLI-for-themes',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/CLI-for-themes', '72b'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/intro', '8ff'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/', 'd24'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Intro', '9cf'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Operators',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Operators', 'ea9'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy', '349'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Types',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Types', 'f06'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Whitespace-Control',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Whitespace-Control', '035'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Filters',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Filters', 'dcb'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet', '180'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Control-flow',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Control-flow', 'b3e'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Iteration',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Iteration', '4c0'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Template',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Template', '9d6'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Variable',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Variable', 'ac8'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Metaobjects',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Metaobjects', '1ee'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Sections-and-Blocks',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Sections-and-Blocks', '58f'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Templates-and-Metafields',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Templates-and-Metafields', 'b26'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/WordPress/Speed Optimization/wp-speed-cwv-playbook',
                component: ComponentCreator('/docs/Devdocs/WordPress/Speed Optimization/wp-speed-cwv-playbook', '0b7'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/WordPress/Speed Optimization/wp-speed-hosting-php-db',
                component: ComponentCreator('/docs/Devdocs/WordPress/Speed Optimization/wp-speed-hosting-php-db', '56f'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/WordPress/Speed Optimization/wp-speed-overview',
                component: ComponentCreator('/docs/Devdocs/WordPress/Speed Optimization/wp-speed-overview', '16c'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/WordPress/Speed Optimization/wp-speed-plugin-checklist',
                component: ComponentCreator('/docs/Devdocs/WordPress/Speed Optimization/wp-speed-plugin-checklist', '3f8'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/WordPress/Speed Optimization/wp-speed-stack-deep-dive',
                component: ComponentCreator('/docs/Devdocs/WordPress/Speed Optimization/wp-speed-stack-deep-dive', '5a4'),
                exact: true,
                sidebar: "devDocsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
