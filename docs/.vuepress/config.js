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
      placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊！',
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
        text: 'Footprint',
        link: '/blogs/footprint.html',
        icon: 'fas fa-map-marker-alt',
      },
      {
        text: 'MessageBoard',
        link: '/blogs/MessageBorad.html',
        icon: 'reco-suggestion',
      },
      {
        text: 'About',
        link: '/blogs/about.html',
        icon: 'reco-account',
      },
      {
        text: 'Links',
        type: 'links',
        items: [
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
    friendLink: [
      {
        title: '叫我詹躲躲',
        desc: '岂能尽如人意，但求无愧于心',
        logo: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg',
        link: 'https://zhanhongzhu.top',
      },
      {
        title: 'latte and cat',
        desc: 'study programs and record life',
        logo: 'https://photo.smallsunnyfox.com/images/blog/head.png',
        link: 'https://blog.smallsunnyfox.com',
      },
      {
        title: "L1nSn0w's Blog",
        desc: '我很菜，你忍一下！',
        logo: 'https://linsnow.cn/img/avatar.jpg',
        link: 'https://blog.linsnow.cn',
      },
    ],
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
