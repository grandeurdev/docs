// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grandeur Docs',
  tagline: 'IoT dev on steroids',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.grandeur.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grandeurdev', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/grandeurdev/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/grandeurdev/blog/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Grandeur',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Quickstart',
          },
          {
            type: 'doc',
            docId: 'guides/canvas',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'references/device-sdk/installation',
            position: 'left',
            label: 'References',
          },
          {
            type: 'doc',
            docId: 'keywords',
            position: 'left',
            label: 'Keywords',
          },
          {
            type: 'doc',
            docId: 'faqs',
            position: 'left',
            label: 'FAQs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/grandeurdev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'Hello world with IoT',
                to: '/docs/hello-world-with-iot',
              },
              {
                label: 'Building your custom app',
                to: '/docs/builde-your-custom-app',
              },
              {
                label: 'Guides',
                to: '/docs/guides',
              },
              {
                label: 'References',
                to: '/docs/references',
              },
              {
                label: 'Keywords',
                to: '/docs/keywords',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/HQWX4uwkqC',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/grandeurdev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'FAQs',
                to: '/faqs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grandeurdev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grandeur Technologies, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
