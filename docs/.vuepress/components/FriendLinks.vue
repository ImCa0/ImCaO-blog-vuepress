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