// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphBolt docs',
  tagline: '',
  favicon: 'img/favicon.png',

  url: 'https://docs.graphbolt.dev',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'graphboltdev', // Usually your GitHub org/user name.
  projectName: 'graphbolt', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/graphboltdev/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  scripts: [{ src: 'https://stats.graphbolt.dev/js/script.outbound-links.js', defer: true, 'data-domain': 'docs.graphbolt.dev' }],


  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        docsRouteBasePath: "/",
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      zoom: {},
      navbar: {
        logo: {
          alt: 'GraphBolt',
          src: 'img/logo-full-black.svg',
          srcDark: 'img/logo-full.svg',
        },
        items: [
          {
            href: 'https://graphbolt.dev',
            label: 'Download',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vekQvYHjPm',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/graphbolt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GraphBolt',
                href: 'https://graphbolt.dev',
              },
              {
                label: 'Blog',
                href: 'https://blog.graphbolt.dev',
              },
              {
                label: 'Roadmap',
                href: 'https://github.com/orgs/graphboltdev/projects/1',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GraphBolt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
