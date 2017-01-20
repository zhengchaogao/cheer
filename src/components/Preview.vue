<template>
  <div class="preview" v-if="isPreview">
    <div class="preview-item" v-show="isShow === 1"></div>
    <div class="preview-item" v-show="isShow === 2"></div>
    <div class="preview-item" v-show="isShow === 3"></div>
    <div class="preview-item" v-show="isShow === 4"></div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        isPreview: false,
        isShow: 1
      };
    },
    mounted() {
      const timer = setInterval(() => {
        if (this.isShow < 4) {
          this.isShow += 1;
        } else {
          clearInterval(timer);
          this.isPreview = false;
        }
      }, 1000);
    }
  };
</script>

<style lang="less">
  .preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(../img/preview-bg.png);
    background-size: cover;
    background-position: center;
    &-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      &:nth-of-type(1) {
        background-image: url(../img/preview-01.png);
      }
      &:nth-of-type(2) {
        background-image: url(../img/preview-02.png);
      }
      &:nth-of-type(3) {
        background-image: url(../img/preview-03.png);
      }
      &:nth-of-type(4) {
        background-image: url(../img/preview-04.png);
      }
    }
  }
</style>