<template>
  <div class="home" :class="[homeImg]" v-show="route === 'home'">
    <div class="home-navi">
      <div class="home-wrap">
        <a class="home-item"
           v-for="(item, index) in list"
           @mouseover="changeBg(index + 1)" 
           :href="item.redirectUrl">
          <p class="home-item-title">{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  module.exports = {
    data() {
      return {
        list: [
          {
            title: '新西兰Wither Hills酒庄系列1',
            redirectUrl: 'https://www.tmall.com/'
          },
          {
            title: '新西兰Wither Hills酒庄系列2',
            redirectUrl: 'https://www.tmall.com/'
          },
          {
            title: '新西兰Wither Hills酒庄系列3',
            redirectUrl: 'https://www.tmall.com/'
          },
          {
            title: '新西兰Wither Hills酒庄系列4',
            redirectUrl: 'https://www.tmall.com/'
          }
        ],
        homeImg: 'home-img01'
      };
    },
    methods: {
      changeBg(index) {
        this.homeImg = `home-img0${index}`;
      }
    },
    computed: mapState([
      'route'
    ])
  };
</script>

<style lang="less">
  .home {
    width: 100%;
    height: 1037px;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s;
    &-img01 {
      background-image: url(../img/home-01.jpg);
    }
    &-img02 {
      background-image: url(../img/home-thumb-02.png);
    }
    &-img03 {
      background-image: url(../img/home-thumb-03.png);
    }
    &-img04 {
      background-image: url(../img/home-thumb-04.png);
    }
    &-navi {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      left: 0;
      bottom: 0;
      width: 100%;
      height: 319px;
    }
    &-wrap {
      margin: 22px auto;
      width: 960px;
    }
    &-item {
      float: left;
      margin-right: 22px;
      width: 223px;
      height: 135px;
      background-color: rgb(238, 238, 238);
      background-size: 100% 100%;
      &:hover {
        .home-item-title {
          margin: 0;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          background-image: url(../img/cart.png);
          background-repeat: no-repeat;
          background-size: 35px 35px;
          background-position: center;
        }
      }
      &:nth-of-type(1) {
        background-image: url(../img/home-thumb-01.png);
      }
      &:nth-of-type(2) {
        background-image: url(../img/home-thumb-02.png);
      }
      &:nth-of-type(3) {
        background-image: url(../img/home-thumb-03.png);
      }
      &:nth-of-type(4) {
        margin-right: 0;
        background-image: url(../img/home-thumb-04.png);
      }
      &-title {
        margin: 0;
        padding: 0 10px;
        height: 46px;
        font-size: 16px;
        white-space: nowrap;
        color: rgb(255, 255, 255);
        line-height: 46px;
        background-color: rgba(0, 0, 0, 0.8);
        transition: height 0.2s;
      }
    }
  }
</style>