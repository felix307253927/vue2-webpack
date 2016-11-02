import Vue from 'vue';
import router from './routes';
import Auth from './auth';

const auth = new Auth();

const app = new Vue({
  el      : '#app',
  model   : '',
  router  : router,
  template: `
    <div>
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/test">Go to test</router-link>
      <a href="javascript:;" @click="logout()">logout</a>
      <router-view></router-view>    
    </div>
  `,
  methods : {
    logout(){
      auth.logout(()=>{
        this.$router.replace('/home');
      });
    }
  }
});
