<template>
  <div class="about" v-show="route === 'about'">
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
  }
</style>