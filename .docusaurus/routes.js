import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '598'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '881'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '99b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '6f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e26'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd06'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd28'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post', 'c6a'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two', '3fc'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss', '459'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss', 'd3e'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0', 'a68'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'fa3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2b9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1cc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b94'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b53'),
            routes: [
              {
                path: '/docs/Devdocs/Magento/clean_code',
                component: ComponentCreator('/docs/Devdocs/Magento/clean_code', 'c5a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/cwv',
                component: ComponentCreator('/docs/Devdocs/Optimize/cwv', '85a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/treo',
                component: ComponentCreator('/docs/Devdocs/Optimize/treo', 'c8a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/cli',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/cli', '454'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/create-an-app',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/create-an-app', '559'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/intro', '1fe'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/polaris',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/polaris', 'd54'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/api-access-scope',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/api-access-scope', '6d8'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/api-extension',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/api-extension', '61e'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/architecture',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/architecture', 'bd3'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/apps/Shopify App Remix/overview',
                component: ComponentCreator('/docs/Devdocs/Shopify/apps/Shopify App Remix/overview', '09d'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Architecture/',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Architecture/', '42a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/CLI-for-themes',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/CLI-for-themes', '2c5'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/intro', 'dcd'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/', 'a01'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Intro',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Intro', 'dfb'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Operators',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Operators', 'f08'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy', '4df'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Types',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Types', 'd2a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Basic/Whitespace-Control',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Basic/Whitespace-Control', 'f2a'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Filters',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Filters', '2cc'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet', '25c'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Control-flow',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Control-flow', '277'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Iteration',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Iteration', '989'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Template',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Template', 'e01'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Liquid/Tags/Variable',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Liquid/Tags/Variable', '4ea'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Metaobjects',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Metaobjects', 'c35'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Sections-and-Blocks',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Sections-and-Blocks', 'de0'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Shopify/themes/Templates-and-Metafields',
                component: ComponentCreator('/docs/Devdocs/Shopify/themes/Templates-and-Metafields', '18b'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/QCdocs/demo1',
                component: ComponentCreator('/docs/QCdocs/demo1', 'd8e'),
                exact: true,
                sidebar: "qcSidebar"
              },
              {
                path: '/docs/WorkProcess/demo2',
                component: ComponentCreator('/docs/WorkProcess/demo2', '554'),
                exact: true,
                sidebar: "workProcessSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'beb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
