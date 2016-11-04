/**
 * @license Created by felix on 16-11-2.
 * @email   307253927@qq.com
 */
'use strict';

import VueRouter from 'vue-router';
import Test from './pages/test.vue';
import Login from './pages/login.vue';
import auth from './auth.vue';
import About from './pages/about.vue';
import HomeModule from './pages/home/home.module';


function requireAuth(to, from, next) {
  if (!auth.isLogin()) {
    next({
      path : '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
}

function userIsLogin(to, from, next) {
  if (auth.isLogin()) {
    next('/home');
  } else {
    next();
  }
}


const routes = [
  HomeModule,
  {path: '/about', component: About},
  {path: '/test', component: Test, beforeEnter: requireAuth},
  {
    path       : '/login', component: Login,
    beforeEnter: userIsLogin
  }
];

export default new VueRouter({
  mode: 'history',
  // mode: 'hash', // default
  base: __dirname,
  routes
});
