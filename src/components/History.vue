<template>
  <div class="history" v-show="route === 'history'">
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
  .history {
    margin: 0 auto;
    width: 100%;
    height: 2584px;
    background-image: url('../img/history.jpg');
    background-repeat: no-repeat;
    background-color: rgb(0, 0, 0);
    background-size: cover;
    background-position: center;
  }
</style>