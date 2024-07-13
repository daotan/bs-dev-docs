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
    component: ComponentCreator('/docs', '8f8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '701'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c03'),
            routes: [
              {
                path: '/docs/apps/cli',
                component: ComponentCreator('/docs/apps/cli', 'ff4'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/create-an-app',
                component: ComponentCreator('/docs/apps/create-an-app', '752'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/intro',
                component: ComponentCreator('/docs/apps/intro', '727'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/polaris',
                component: ComponentCreator('/docs/apps/polaris', '09e'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/Shopify App Remix/api-access-scope',
                component: ComponentCreator('/docs/apps/Shopify App Remix/api-access-scope', '013'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/Shopify App Remix/api-extension',
                component: ComponentCreator('/docs/apps/Shopify App Remix/api-extension', 'fac'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/Shopify App Remix/architecture',
                component: ComponentCreator('/docs/apps/Shopify App Remix/architecture', '4be'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/apps/Shopify App Remix/overview',
                component: ComponentCreator('/docs/apps/Shopify App Remix/overview', '3b8'),
                exact: true,
                sidebar: "appsSidebar"
              },
              {
                path: '/docs/techdocs/Magento/clean_code',
                component: ComponentCreator('/docs/techdocs/Magento/clean_code', 'c6d'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Optimize/cwv',
                component: ComponentCreator('/docs/techdocs/Optimize/cwv', 'b58'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Optimize/treo',
                component: ComponentCreator('/docs/techdocs/Optimize/treo', '357'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/cli',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/cli', '456'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/create-an-app',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/create-an-app', 'cd7'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/intro',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/intro', 'ee4'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/polaris',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/polaris', '9e5'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/Shopify App Remix/api-access-scope',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/Shopify App Remix/api-access-scope', 'bab'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/Shopify App Remix/api-extension',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/Shopify App Remix/api-extension', '726'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/Shopify App Remix/architecture',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/Shopify App Remix/architecture', 'cb5'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/apps/Shopify App Remix/overview',
                component: ComponentCreator('/docs/techdocs/Shopify/apps/Shopify App Remix/overview', '84d'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Architecture/',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Architecture/', '602'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/CLI-for-themes',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/CLI-for-themes', '574'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/intro',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/intro', 'c65'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/', 'cac'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Basic/Intro',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Basic/Intro', '6a2'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Basic/Operators',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Basic/Operators', '7e3'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Basic/Truthy-and-Falsy', 'f2a'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Basic/Types',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Basic/Types', 'b20'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Basic/Whitespace-Control',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Basic/Whitespace-Control', '5c9'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Filters',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Filters', '8db'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Liquid-Cheat-Sheet', '7d2'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Tags/Control-flow',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Tags/Control-flow', 'ff1'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Tags/Iteration',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Tags/Iteration', '58e'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Tags/Template',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Tags/Template', '04a'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Liquid/Tags/Variable',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Liquid/Tags/Variable', '050'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Metaobjects',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Metaobjects', 'd94'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Sections-and-Blocks',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Sections-and-Blocks', '5ae'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/techdocs/Shopify/themes/Templates-and-Metafields',
                component: ComponentCreator('/docs/techdocs/Shopify/themes/Templates-and-Metafields', 'c16'),
                exact: true,
                sidebar: "techDocsSidebar"
              },
              {
                path: '/docs/themes/Architecture/',
                component: ComponentCreator('/docs/themes/Architecture/', 'a37'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/CLI-for-themes',
                component: ComponentCreator('/docs/themes/CLI-for-themes', '707'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/intro',
                component: ComponentCreator('/docs/themes/intro', '9ef'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/',
                component: ComponentCreator('/docs/themes/Liquid/', 'bce'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Basic/Intro',
                component: ComponentCreator('/docs/themes/Liquid/Basic/Intro', '019'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Basic/Operators',
                component: ComponentCreator('/docs/themes/Liquid/Basic/Operators', 'f8c'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Basic/Truthy-and-Falsy',
                component: ComponentCreator('/docs/themes/Liquid/Basic/Truthy-and-Falsy', '652'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Basic/Types',
                component: ComponentCreator('/docs/themes/Liquid/Basic/Types', 'ba4'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Basic/Whitespace-Control',
                component: ComponentCreator('/docs/themes/Liquid/Basic/Whitespace-Control', '213'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Filters',
                component: ComponentCreator('/docs/themes/Liquid/Filters', '3e4'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Liquid-Cheat-Sheet',
                component: ComponentCreator('/docs/themes/Liquid/Liquid-Cheat-Sheet', 'c3e'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Tags/Control-flow',
                component: ComponentCreator('/docs/themes/Liquid/Tags/Control-flow', '10c'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Tags/Iteration',
                component: ComponentCreator('/docs/themes/Liquid/Tags/Iteration', '27b'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Tags/Template',
                component: ComponentCreator('/docs/themes/Liquid/Tags/Template', '012'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Liquid/Tags/Variable',
                component: ComponentCreator('/docs/themes/Liquid/Tags/Variable', 'c1a'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Metaobjects',
                component: ComponentCreator('/docs/themes/Metaobjects', 'c2e'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Sections-and-Blocks',
                component: ComponentCreator('/docs/themes/Sections-and-Blocks', 'db2'),
                exact: true,
                sidebar: "themesSidebar"
              },
              {
                path: '/docs/themes/Templates-and-Metafields',
                component: ComponentCreator('/docs/themes/Templates-and-Metafields', '5a1'),
                exact: true,
                sidebar: "themesSidebar"
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
