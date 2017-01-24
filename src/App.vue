<template>
  <div class="app">
    <navi></navi>
    <preview></preview>
    <home></home>
    <history></history>
    <taste></taste>
    <about></about>
    <bottom></bottom>
  </div>
</template>

<script>
  import Navi from './components/Navi.vue';
  import Bottom from './components/Bottom.vue';
  import Preview from './components/Preview.vue';
  import Home from './components/Home.vue';
  import History from './components/History.vue';
  import Taste from './components/Taste.vue';
  import About from './components/About.vue';


  export default {
    components: {
      Bottom,
      Preview,
      Navi,
      Home,
      History,
      Taste,
      About
    }
  };
</script>

<style lang="less">
  @import './css/normalize.less';
  .app {
    position: relative;
    min-width: 100px;
    overflow: hidden;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>