<template>
  <div class="about" v-show="route === 'about'">
    <div class="about-guide">
      <a href="https://www.taobao.com/" class="about-href"></a>
    </div>
    <div class="about-guide">
      <a href="https://www.taobao.com/" class="about-href"></a>
    </div>
    <div class="about-guide"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  module.exports = {
    computed: mapState([
      'route'
    ])
  };
</script>

<style lang="less">
  .about {
    margin: 0 auto;
    width: 100%;
    height: 1181px;
    background-image: url('../img/about.jpg');
    background-repeat: no-repeat;
    background-color: rgb(0, 0, 0);
    background-size: cover;
    background-position: center;
    &-guide {
      position: absolute;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &:nth-of-type(1) {
        top: 299px;
        height: 117px;
        background-image: url(../img/about-tmall.png);
        -webkit-transform-origin: 47.4% 27px;
        transform-origin: 47.4% 27px;
      }
      &:nth-of-type(2) {
        top: 421px;
        height: 117px;
        background-image: url(../img/about-jd.png);
        -webkit-transform-origin: 47.4% 20px;
        transform-origin: 47.3% 20px;
      }
      &:nth-of-type(3) {
        top: 550px;
        height: 129px;
        background-image: url(../img/about-contact.png);
        -webkit-transform-origin: 47.4% 37px;
        transform-origin: 47.3% 37px;
      }
      &:hover {
        -webkit-animation-name: swing;
        animation-name: swing;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
    }
    &-href {
      display: block;
      margin: 0 auto;
      width: 400px;
      height: 117px;
    }
  }
  @keyframes swing {
    20% {
      -webkit-transform: rotate3d(0, 0, 1, 15deg);
      transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
      -webkit-transform: rotate3d(0, 0, 1, -10deg);
      transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
      -webkit-transform: rotate3d(0, 0, 1, 5deg);
      transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
      -webkit-transform: rotate3d(0, 0, 1, -5deg);
      transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
</style>