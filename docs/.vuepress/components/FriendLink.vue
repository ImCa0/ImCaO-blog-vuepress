<template>
  <div class="item">
    <a :href="link"
       target="blank"
       class="friendLink">
      <div :style="{backgroundImage: 'url(' + logo + ')'}"
           class="logo"></div>
      <div class="info">
        <p>{{title}}</p>
        <p>{{desc}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.item {
  width: 50%;
  height: 8rem;
}
.friendLink {
  text-decoration: none !important;
  display: flex;
  align-items: center;
  position: relative;
  left: 5%;
  top: 10%;
  width: 90%;
  height: 80%;
  background-color: rgba(52, 136, 253, 0.075);
  border-width: 2px;
  border-color: rgb(156, 163, 175);
  border-radius: 0.375rem;
  box-shadow: 0.7px 1px 6px rgb(0 0 0 / 16%);
  animation: unhover 0.3s forwards;
}
.friendLink:hover {
  animation: hover 0.3s forwards;
}
@keyframes hover {
  from {
    left: 5%;
    top: 10%;
    width: 90%;
    height: 80%;
  }
  to {
    left: 2.5%;
    top: 7.5%;
    height: 85%;
    width: 95%;
  }
}
@keyframes unhover {
  from {
    left: 2.5%;
    top: 7.5%;
    height: 85%;
    width: 95%;
  }
  to {
    left: 5%;
    top: 10%;
    width: 90%;
    height: 80%;
  }
}
.friendLink .logo {
  background-size: contain;
  margin: 0 1.5rem;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 0.375rem;
}
.info {
  width: calc(100% - 8.9rem);
  height: 4.4rem;
}
.info p:nth-child(1) {
  margin: 0;
  line-height: 1.8rem;
  text-decoration: none !important;
  font-family: 'Chalkboard SE', 'PingFangSC-Regular', 'Comic Sans MS',
    STZhongsong, Ovo, Georgia, 'Microsoft YaHei', serif;
}
.info p:nth-child(2) {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 2.6rem;
  margin: 0;
  color: var(--text-color);
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, opensans, Optima,
    'Microsoft Yahei', sans-serif;
}
@media (max-width: 640px) {
  .item {
    width: 100%;
  }
  .friendLink {
    left: 0;
    width: 100%;
  }
  .friendLink .logo {
    margin: 0 1rem;
    height: 4rem;
    width: 4rem;
  }
  .info {
    width: calc(100% - 7rem);
  }
}
</style>