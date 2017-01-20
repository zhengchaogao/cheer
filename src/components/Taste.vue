<template>
  <div class="taste" v-show="route === 'taste'">
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
  .taste {
    margin: 0 auto;
    width: 100%;
    height: 1467px;
    background-image: url('../img/taste.jpg');
    background-repeat: no-repeat;
    background-color: rgb(0, 0, 0);
    background-size: cover;
    background-position: center;
  }
</style>