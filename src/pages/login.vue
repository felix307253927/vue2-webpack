<style scoped="">
  .error {
    color: red;
  }
</style>

<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
      <button type="submit">login</button>
      <p v-if="!validName" class="error">Bad login email</p>
      <p v-if="!validPwd" class="error">Bad login password</p>
    </form>
  </div>
</template>

<script>
  import auth from '../auth.vue';
  export default {
    el:'#app',
    data () {
      return {
        email: '',
        pass : ''
      }
    },
    computed: {
      validName(){
        return this.email.length > 0;
      },
      validPwd(){
        return this.pass.length > 0;
      }
    },
    methods : {
      login () {
        auth.login(this.email, this.pass, ()=> {
          this.$router.replace(this.$route.query.redirect || '/');
        })
      }
    }
  }
</script>