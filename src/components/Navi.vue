<template>
  <div class="navi">
    <div class="navi-logo"></div>
    <ul class="navi-list">
      <li v-for="(value, key) in router"
          @click="commitRoute(key)"
          :class="[route === key ? 'active' : '']"
      >{{value}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  module.exports = {
    data() {
      return {
        router: {
          home: '首页',
          history: '品牌故事',
          partners: '全球Partners',
          assistant: '选酒助手',
          taste: '如何品酒',
          about: '关于我们'
        }
      };
    },
    methods: {
      commitRoute(route) {
        this.$store.commit('changeRoute', route);
      }
    },
    computed: mapState([
      'route'
    ])
  };
</script>

<style lang="less">
  .navi {
    /*display: none;*/
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 157px;
    background-color: rgba(0, 0, 0, 0.8);
    &-logo {
      margin: 32px auto;
      width: 332px;
      height: 61px;
      background-image: url(../img/navi-logo.png);
      background-size: 100% 100%;
    }
    &-list {
      margin: 0 auto;
      padding: 0;
      width: 770px;
      list-style-type: none;
      overflow: hidden;
      li {
        float: left;
        margin-right: 75px;
        font-size: 14px;
        line-height: 24px;
        color: rgb(254, 254, 254);
        cursor: pointer;
        &.active {
          border-bottom: 3px solid rgb(207, 169, 114);
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
</style>