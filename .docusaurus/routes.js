import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8c1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f2f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a54'),
            routes: [
              {
                path: '/docs/Devdocs/AI Docs/frontend_optimize_development',
                component: ComponentCreator('/docs/Devdocs/AI Docs/frontend_optimize_development', '9ab'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/CoreWebVitals/cls',
                component: ComponentCreator('/docs/Devdocs/Optimize/CoreWebVitals/cls', 'dad'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/CoreWebVitals/inp',
                component: ComponentCreator('/docs/Devdocs/Optimize/CoreWebVitals/inp', '9e3'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/CoreWebVitals/lcp',
                component: ComponentCreator('/docs/Devdocs/Optimize/CoreWebVitals/lcp', 'def'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/cwv',
                component: ComponentCreator('/docs/Devdocs/Optimize/cwv', '31d'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/PerformanceAuditWebsite/chrome-devtools',
                component: ComponentCreator('/docs/Devdocs/Optimize/PerformanceAuditWebsite/chrome-devtools', '082'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/PerformanceAuditWebsite/GTmetrix',
                component: ComponentCreator('/docs/Devdocs/Optimize/PerformanceAuditWebsite/GTmetrix', '290'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/PerformanceAuditWebsite/lighthouse',
                component: ComponentCreator('/docs/Devdocs/Optimize/PerformanceAuditWebsite/lighthouse', '503'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/PerformanceAuditWebsite/pagespeed-insights',
                component: ComponentCreator('/docs/Devdocs/Optimize/PerformanceAuditWebsite/pagespeed-insights', 'ede'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/Devdocs/Optimize/PerformanceAuditWebsite/web-page-test',
                component: ComponentCreator('/docs/Devdocs/Optimize/PerformanceAuditWebsite/web-page-test', '12a'),
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
                path: '/docs/QCdocs/demo1',
                component: ComponentCreator('/docs/QCdocs/demo1', 'ef3'),
                exact: true,
                sidebar: "qcSidebar"
              },
              {
                path: '/docs/WorkProcess/demo2',
                component: ComponentCreator('/docs/WorkProcess/demo2', '675'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
