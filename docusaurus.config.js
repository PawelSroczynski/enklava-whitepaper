// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enklava Whitepaper',
  tagline: 'The Operating System for Regenerative Settlement',
  favicon: 'img/favicon.svg',

  url: 'https://enklava.co',
  baseUrl: '/whitepaper/',

  organizationName: 'enklava',
  projectName: 'whitepaper',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/PawelSroczynski/enklava-whitepaper/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/enklava-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Enklava Logo',
          src: 'img/logo-transparent.png',
          srcDark: 'img/logo-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'whitepaperSidebar',
            position: 'left',
            label: 'Whitepaper',
          },
          {
            href: 'https://enklava.co/whitepaper/Enklava-Whitepaper.pdf',
            label: 'Download PDF',
            position: 'right',
          },
          {
            href: 'https://enklava.co',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Enklava`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
