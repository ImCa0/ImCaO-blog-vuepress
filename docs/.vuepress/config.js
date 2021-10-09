module.exports = {
  title: "ImCaO's Blog",
  description: '当我下定决心奔向你时，不要推开我',
  dest: 'ROOT',
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
    // [
    //   'script',
    //   {
    //     async: true,
    //     src: 'https://www.googletagmanager.com/gtag/js?id=G-C6MZEQ4XN0',
    //   },
    // ],
    // [
    //   'script',
    //   {
    //     src: '/scripts/ga.js',
    //   },
    // ],
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
      // {
      //   "text": "Love",
      //   "link": "https://www.imcao.cn/love",
      //   "icon": "reco-message"
      // }
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
      // tag: {
      //   location: 3,
      //   text: 'Tag',
      // },
    },
    friendLink: [
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: '一款简洁而优雅的 vuepress 博客 & 文档主题',
      //   logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
      //   link: 'https://vuepress-theme-reco.recoluan.com/',
      // },
      {
        title: '叫我詹躲躲',
        desc: '岂能尽如人意，但求无愧于心',
        logo: 'https://zhanhongzhu.top/avatar.jpg',
        link: 'https://zhanhongzhu.top',
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
  plugins: [
    ['@vuepress/nprogress'],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['whiteCat'],
        clean: true,
      },
    ],
    // [
    //   '@vuepress-reco/vuepress-plugin-bgm-player',
    //   {
    //     audios: [
    //       {
    //         name: '云烟成雨',
    //         artist: '房东的猫',
    //         url: '/bgm/云烟成雨.mp3',
    //         cover:
    //           'http://p1.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg',
    //       },
    //       {
    //         name: '所念皆星河',
    //         artist: '房东的猫',
    //         url: '/bgm/所念皆星河.mp3',
    //         cover:
    //           'http://p1.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg',
    //       },
    //       {
    //         name: '那些花儿',
    //         artist: '房东的猫',
    //         url: '/bgm/那些花儿.mp3',
    //         cover:
    //           'http://p2.music.126.net/LDm-cdbOil0xSMqJj_QXrw==/109951165487371866.jpg',
    //       },
    //       {
    //         name: '月亮鲸鱼',
    //         artist: '房东的猫',
    //         url: '/bgm/月亮鲸鱼.mp3',
    //         cover:
    //           'http://p2.music.126.net/cWt6z6bhPPmQKd-qOzThnA==/109951165252977844.jpg',
    //       },
    //       {
    //         name: '下一站，茶山刘',
    //         artist: '房东的猫',
    //         url: '/bgm/错位时空_艾辰.mp3',
    //         cover:
    //           'http://p1.music.126.net/eyY36vwg6DWAJpBy9FZngA==/19176582300236529.jpg',
    //       },
    //       {
    //         name: '错位时空',
    //         artist: '艾辰',
    //         url: '/bgm/错位时空_艾辰.mp3',
    //         cover:
    //           'http://p2.music.126.net/8C0lwLE88j9ZwLyPQ9a4FA==/109951165595770076.jpg',
    //       },
    //       {
    //         name: '星辰大海',
    //         artist: '黄霄雲',
    //         url: '/bgm/星辰大海_黄霄雲.mp3',
    //         cover:
    //           'http://p1.music.126.net/9BgjaSNM9Bmkh5waahv_gQ==/109951165628223126.jpg',
    //       },
    //       {
    //         name: '全世界谁倾听你',
    //         artist: '林宥嘉',
    //         url: '/bgm/全世界谁倾听你_林宥嘉.mp3',
    //         cover:
    //           'http://p2.music.126.net/zGgUaGvXapKMy5tfQIB7cw==/109951163167743834.jpg',
    //       },
    //       {
    //         name: '伟大的渺小',
    //         artist: '林俊杰',
    //         url: '/bgm/伟大的渺小_林俊杰.mp3',
    //         cover:
    //           'http://p1.music.126.net/ES0-uOdDoGRNAezIPD3tqA==/109951163469681993.jpg',
    //       },
    //       {
    //         name: 'あなたに愛たくて',
    //         artist: 'AZU',
    //         url: '/bgm/あなたに愛たくて_AZU.mp3',
    //         cover:
    //           'http://p1.music.126.net/leTr2C6w0mjm36eaLFwoXA==/19074327718902511.jpg',
    //       },
    //       {
    //         name: 'Yesterday Once More',
    //         artist: 'Carpenters',
    //         url: '/bgm/Yesterday Once More_Carpenters.mp3',
    //         cover:
    //           'http://p1.music.126.net/oohnKqUgkNEsYJHJDcGmZw==/19000660439857160.jpg',
    //       },
    //     ],
    //     autoShrink: true,
    //   },
    // ],
  ],
}
