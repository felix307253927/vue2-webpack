<style>

</style>

<template>
  <div v-if="isLogin">
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/test">Go to test</router-link>
    <a href="javascript:;" @click="logout()">logout</a>
  </div>
</template>

<script>
  import auth from '../auth.vue';

  export default {
    data(){
      return {
        isLogin: auth.isLogin()
      }
    }
  }
</script>
