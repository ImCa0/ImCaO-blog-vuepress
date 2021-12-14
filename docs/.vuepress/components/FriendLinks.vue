<template>
  <div class="container">
    <FriendLink v-for="(item, index) in friendLinks"
                :key="index"
                :title="item.title"
                :desc="item.desc"
                :logo="item.logo"
                :link="item.link" />
  </div>
</template>

<script>
import FriendLink from './FriendLink.vue'
export default {
  components: {
    FriendLink
  },
  data () {
    return {
      friendLinks: [
        {
          title: '叫我詹躲躲',
          desc: '岂能尽如人意，但求无愧于心',
          logo: '	https://zhanhongzhu.top/avatar.jpg',
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
        {
          title: 'LOGI',
          desc: '会点代码的强迫症',
          logo: 'https://code.bdstatic.com/npm/logicdn@1.0.0/logi.im/usr/images/global/logo.webp',
          link: 'https://logi.im',
        },
        {
          title: '平凡的你我',
          desc: '理想成为大牛的小陈同学',
          logo: 'https://reinness.com/static/avatar.png',
          link: 'https://reinness.com',
        },
        {
          title: "XIAOMING'S BLOG",
          desc: '记录生活点滴，谱写精彩生活！',
          logo: 'https://pic.vimin.cc/logo.png',
          link: 'https://vimin.cc',
        },
        {
          title: "鱼跃此时海",
          desc: '鱼跃此时海，花开彼岸天',
          logo: 'https://www.overme.cn/static/img/portrait.jpg',
          link: 'https://www.overme.cn',
        },
        {
          title: "Sakura` Blogs",
          desc: '或苦或甜都不要辜负~',
          logo: 'https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20200617192549.png',
          link: 'https://jinan6.vip',
        },
        {
          title: 'Colsrch',
          desc: '愿多年以后，我可以酌一杯清酒，烂醉如泥，梦中回到我们的曾经。',
          logo: 'https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg',
          link: 'https://colsrch.cn',
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  height: auto;
}

</style>