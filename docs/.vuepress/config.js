module.exports = {
  title: "ImCaO's Blog",
  description: '花有重开日，人无再少年。',
  dest: 'dist',
  port: '7777',
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
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'MessageBoard',
        link: '/blogs/MessageBorad.html',
        icon: 'reco-suggestion',
      },
      {
        text: 'FriendLinks',
        link: '/blogs/FriendLinks.html',
        icon: 'reco-api',
      },
      {
        text: 'Links',
        type: 'links',
        items: [
          {
            text: 'About',
            link: '/blogs/about.html',
            icon: 'reco-account',
          },
          {
            text: 'Footprint',
            link: '/blogs/footprint.html',
            icon: 'fas fa-map-marker-alt',
          },
          {
            text: 'Favorites',
            link: 'https://www.imcao.cn/favorites/',
            icon: 'reco-document',
          },
          {
            text: 'Weibo',
            icon: 'reco-weibo',
            link: 'https://weibo.com/u/3533869340',
          },
        ],
        icon: 'reco-api',
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
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
  plugins: [['@vuepress/nprogress']],
}
