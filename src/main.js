/**
 * @license Created by felix on 16-11-2.
 * @email   307253927@qq.com
 */
'use strict';

import Vue from 'vue';
import router from './routes';
import auth from './auth.vue';

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
