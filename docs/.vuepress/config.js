module.exports = {
  title: "ImCaO's Blog",
  description: '花有重开日，人无再少年。',
  dest: 'dist',
  port: '7777',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'script',
      {
        src: '/scripts/baidu.js',
      },
    ],
    [
      'script',
      {
        src: '/scripts/wakeup.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    mode: 'auto',
    commentsSolution: 'valine',
    valineConfig: {
      appId: 'OGHXv2eJzhMHNSVljRDkxDMJ-gzGzoHsz', // your appId
      appKey: 'DyiGvNwjtl295wF7cEtjnMEP', // your appKey
      placeholder: '填写邮箱可以收到回复提醒哦~',
      recordIP: true,
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'fas fa-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'fas fa-clock',
      },
      {
        text: 'MessageBoard',
        link: '/blogs/MessageBorad.html',
        icon: 'fas fa-feather-alt',
      },
      {
        text: 'FriendLinks',
        link: '/blogs/FriendLinks.html',
        icon: 'fas fa-user-friends',
      },
      {
        text: 'Links',
        type: 'links',
        items: [
          {
            text: 'About',
            link: '/blogs/about.html',
            icon: 'fas fa-user',
          },
          {
            text: 'Footprint',
            link: '/blogs/footprint.html',
            icon: 'fas fa-map-marker-alt',
          },
          {
            text: 'Favorites',
            link: 'https://www.imcao.cn/favorites/',
            icon: 'fas fa-bookmark',
          },
          {
            text: 'RSS',
            link: 'https://www.imcao.cn/rss.xml',
            icon: 'fas fa-rss',
          },
        ],
        icon: 'fas fa-link',
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      socialLinks: [
        {
          icon: 'fab fa-github',
          link: 'https://github.com/ImCa0',
          color: '#3A3E42',
        },
        {
          icon: 'fas fa-envelope',
          link: 'mailto:imcao@imcao.cn',
          color: '#3498DB',
        },
        {
          icon: 'fab fa-weibo',
          link: 'https://weibo.com/u/3533869340',
          color: '#E15B64',
        },
        {
          icon: 'fab fa-steam',
          link: 'https://steamcommunity.com/id/ImCaO/',
          color: '#476292',
        },
        {
          icon: 'fas fa-subway',
          link: 'https://travellings.link',
          color: '#3A3E42',
        },
      ],
      category: {
        location: 2,
        text: 'Category',
      },
    },
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    repo: 'ImCa0/ImCaO-Blog',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    author: 'ImCaO',
    authorAvatar: '/avatar.png',
    record: '浙ICP备2020040461号-1',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/nprogress'],
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        site_url: 'https://www.imcao.cn',
      },
    ],
  ],
}
