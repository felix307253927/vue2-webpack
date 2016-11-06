<style>

</style>

<template>
  <div v-if="showNav">
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/test">Go to test</router-link>
    <a href="javascript:;" @click="logout()">logout</a>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        showNav: true
      }
    },
    watch: {
      '$route.path': function (n) {
        this.showNav = n != '/login';
      }
    }
  }
</script>
