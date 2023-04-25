import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ab1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '52e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c89'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '902'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '59f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e0e'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5c5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '773'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '54c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '936'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '804'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f0c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '60f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f2f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ade'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '2f2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '95d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd4f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '65c'),
    routes: [
      {
        path: '/docs/build-your-custom-app',
        component: ComponentCreator('/docs/build-your-custom-app', '8f3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/faqs',
        component: ComponentCreator('/docs/faqs', '45d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', '719'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/api-key',
        component: ComponentCreator('/docs/guides/access-credentials/api-key', '266'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/auth-token',
        component: ComponentCreator('/docs/guides/access-credentials/auth-token', '0c3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/cors',
        component: ComponentCreator('/docs/guides/access-credentials/cors', '19f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/device-id-token',
        component: ComponentCreator('/docs/guides/access-credentials/device-id-token', '81d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/secret-key',
        component: ComponentCreator('/docs/guides/access-credentials/secret-key', '78f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/access-credentials/user-and-administrator',
        component: ComponentCreator('/docs/guides/access-credentials/user-and-administrator', 'e05'),
        exact: true
      },
      {
        path: '/docs/guides/access-credentials/username-and-password',
        component: ComponentCreator('/docs/guides/access-credentials/username-and-password', '6ae'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/canvas',
        component: ComponentCreator('/docs/guides/canvas', 'a09'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/datastore/collections',
        component: ComponentCreator('/docs/guides/datastore/collections', '7bb'),
        exact: true
      },
      {
        path: '/docs/guides/datastore/overview',
        component: ComponentCreator('/docs/guides/datastore/overview', 'c0a'),
        exact: true
      },
      {
        path: '/docs/guides/datastore/querying',
        component: ComponentCreator('/docs/guides/datastore/querying', '6fb'),
        exact: true
      },
      {
        path: '/docs/guides/devices/data',
        component: ComponentCreator('/docs/guides/devices/data', '00a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/devices/model',
        component: ComponentCreator('/docs/guides/devices/model', 'c1d'),
        exact: true
      },
      {
        path: '/docs/guides/devices/pairing',
        component: ComponentCreator('/docs/guides/devices/pairing', '4e3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/hardware/handling-connection-status',
        component: ComponentCreator('/docs/guides/hardware/handling-connection-status', 'de2'),
        exact: true
      },
      {
        path: '/docs/guides/hardware/handling-device-variables',
        component: ComponentCreator('/docs/guides/hardware/handling-device-variables', '437'),
        exact: true
      },
      {
        path: '/docs/guides/hardware/handling-updates',
        component: ComponentCreator('/docs/guides/hardware/handling-updates', 'bef'),
        exact: true
      },
      {
        path: '/docs/guides/hardware/handling-wifi',
        component: ComponentCreator('/docs/guides/hardware/handling-wifi', '5ea'),
        exact: true
      },
      {
        path: '/docs/guides/hardware/overview',
        component: ComponentCreator('/docs/guides/hardware/overview', '658'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/hardware/setting-boards/setting-up-esp32',
        component: ComponentCreator('/docs/guides/hardware/setting-boards/setting-up-esp32', 'f9b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/hardware/setting-boards/setting-up-esp8266',
        component: ComponentCreator('/docs/guides/hardware/setting-boards/setting-up-esp8266', '703'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/hardware/setting-boards/setting-up-raspberry-pi',
        component: ComponentCreator('/docs/guides/hardware/setting-boards/setting-up-raspberry-pi', '423'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/hardware/wifi-connection',
        component: ComponentCreator('/docs/guides/hardware/wifi-connection', 'b4a'),
        exact: true
      },
      {
        path: '/docs/guides/project/api-key',
        component: ComponentCreator('/docs/guides/project/api-key', 'd60'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/project/managing-a-project',
        component: ComponentCreator('/docs/guides/project/managing-a-project', '455'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/login',
        component: ComponentCreator('/docs/guides/users/login', 'd0e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/logout',
        component: ComponentCreator('/docs/guides/users/logout', '686'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/managing-user-account/update-account-password',
        component: ComponentCreator('/docs/guides/users/managing-user-account/update-account-password', 'c37'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/managing-user-account/update-forgotten-password',
        component: ComponentCreator('/docs/guides/users/managing-user-account/update-forgotten-password', '485'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/managing-user-account/update-user-profile',
        component: ComponentCreator('/docs/guides/users/managing-user-account/update-user-profile', 'e34'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/guides/users/register',
        component: ComponentCreator('/docs/guides/users/register', 'fd3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/hello-world-with-iot',
        component: ComponentCreator('/docs/hello-world-with-iot', '4d5'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '3a2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/keywords',
        component: ComponentCreator('/docs/keywords', 'f32'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/button',
        component: ComponentCreator('/docs/references/canvas/button', '0d7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/display',
        component: ComponentCreator('/docs/references/canvas/display', 'fa8'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/graph',
        component: ComponentCreator('/docs/references/canvas/graph', '45b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/overview',
        component: ComponentCreator('/docs/references/canvas/overview', '7ed'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/progress',
        component: ComponentCreator('/docs/references/canvas/progress', '0d6'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/slider',
        component: ComponentCreator('/docs/references/canvas/slider', 'a62'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/canvas/table',
        component: ComponentCreator('/docs/references/canvas/table', '581'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/cli',
        component: ComponentCreator('/docs/references/cli', '0e7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/change-password',
        component: ComponentCreator('/docs/references/client-sdk/auth/change-password', 'c35'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/forgot-password',
        component: ComponentCreator('/docs/references/client-sdk/auth/forgot-password', 'fdd'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/is-authenticated',
        component: ComponentCreator('/docs/references/client-sdk/auth/is-authenticated', '7a0'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/login',
        component: ComponentCreator('/docs/references/client-sdk/auth/login', '938'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/logout',
        component: ComponentCreator('/docs/references/client-sdk/auth/logout', '811'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/overview',
        component: ComponentCreator('/docs/references/client-sdk/auth/overview', 'c84'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/register',
        component: ComponentCreator('/docs/references/client-sdk/auth/register', '1ef'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/auth/update-profile',
        component: ComponentCreator('/docs/references/client-sdk/auth/update-profile', '80d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/datastore/collection/delete',
        component: ComponentCreator('/docs/references/client-sdk/datastore/collection/delete', '6b6'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/collection/insert',
        component: ComponentCreator('/docs/references/client-sdk/datastore/collection/insert', 'a1c'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/collection/overview',
        component: ComponentCreator('/docs/references/client-sdk/datastore/collection/overview', 'b6b'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/collection/search',
        component: ComponentCreator('/docs/references/client-sdk/datastore/collection/search', 'c99'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/collection/update',
        component: ComponentCreator('/docs/references/client-sdk/datastore/collection/update', '985'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/drop',
        component: ComponentCreator('/docs/references/client-sdk/datastore/drop', 'd92'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/list',
        component: ComponentCreator('/docs/references/client-sdk/datastore/list', 'e22'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/datastore/overview',
        component: ComponentCreator('/docs/references/client-sdk/datastore/overview', '78b'),
        exact: true
      },
      {
        path: '/docs/references/client-sdk/devices/count',
        component: ComponentCreator('/docs/references/client-sdk/devices/count', '17c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/data/get',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/data/get', 'f93'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/data/on',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/data/on', '313'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/data/set',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/data/set', 'cfb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/get',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/get', 'd57'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/on',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/on', '6ab'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/overview',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/overview', 'ccc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/pair',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/pair', '1de'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/set',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/set', 'c71'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/device/unpair',
        component: ComponentCreator('/docs/references/client-sdk/devices/device/unpair', '15c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/get',
        component: ComponentCreator('/docs/references/client-sdk/devices/get', 'b63'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/on',
        component: ComponentCreator('/docs/references/client-sdk/devices/on', '0fb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/devices/overview',
        component: ComponentCreator('/docs/references/client-sdk/devices/overview', 'd33'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/initialization',
        component: ComponentCreator('/docs/references/client-sdk/initialization', '8b9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/installation',
        component: ComponentCreator('/docs/references/client-sdk/installation', '4f9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/is-connected',
        component: ComponentCreator('/docs/references/client-sdk/is-connected', '15d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/client-sdk/on-connection',
        component: ComponentCreator('/docs/references/client-sdk/on-connection', '6f3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/datastore/collection/insert',
        component: ComponentCreator('/docs/references/device-sdk/datastore/collection/insert', 'b18'),
        exact: true
      },
      {
        path: '/docs/references/device-sdk/datastore/collection/search',
        component: ComponentCreator('/docs/references/device-sdk/datastore/collection/search', 'b91'),
        exact: true
      },
      {
        path: '/docs/references/device-sdk/datastore/overview',
        component: ComponentCreator('/docs/references/device-sdk/datastore/overview', 'ff2'),
        exact: true
      },
      {
        path: '/docs/references/device-sdk/device/data/get',
        component: ComponentCreator('/docs/references/device-sdk/device/data/get', '122'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/device/data/on',
        component: ComponentCreator('/docs/references/device-sdk/device/data/on', 'df7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/device/data/set',
        component: ComponentCreator('/docs/references/device-sdk/device/data/set', '951'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/device/overview',
        component: ComponentCreator('/docs/references/device-sdk/device/overview', '046'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/initialization',
        component: ComponentCreator('/docs/references/device-sdk/initialization', 'daf'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/installation',
        component: ComponentCreator('/docs/references/device-sdk/installation', '2bd'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/is-connected',
        component: ComponentCreator('/docs/references/device-sdk/is-connected', 'f17'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/device-sdk/on-connection',
        component: ComponentCreator('/docs/references/device-sdk/on-connection', '56e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/response-codes',
        component: ComponentCreator('/docs/references/response-codes', '06b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/docs/references/restapi',
        component: ComponentCreator('/docs/references/restapi', 'da7'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '222'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
