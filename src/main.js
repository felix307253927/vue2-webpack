/**
 * @license Created by felix on 16-11-2.
 * @email   307253927@qq.com
 */
'use strict';

import Vue from 'vue';
import router from './routes';
import auth from './auth.vue';
import topNav from './pages/top-nav.vue';

const app = new Vue({
  el        : '#app',
  router    : router,
  template  : `
    <div>
      <top-nav></top-nav>
      <div class="main-view">
        <router-view></router-view>   
      </div>
    </div>
  `,
  components: {
    'top-nav': topNav
  },
  methods   : {
    logout(){
      auth.logout(()=> {
        this.$router.replace('/home');
      });
    }
  }
});
