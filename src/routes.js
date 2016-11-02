import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Test from './pages/test.vue';
import Login from './pages/login.vue';
import Auth from './auth';

const auth = new Auth();

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path : '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/home', component: Home,
    children:[
      { path: 'child1', component: {template:`<div>child1 page</div>`}},
      { path: 'child2', component: {template:`<div>child2 page</div>`}}
    ]
  },
  
  {path: '/about', component: About, alias: '/alias'},
  {path: '/test', component: Test, beforeEnter: requireAuth},
  {
    path: '/login', component: Login,
    beforeEnter (to, from, next) {
      if (auth.loggedIn()) {
        next('/home');
      } else {
        next();
      }
    }
  }
];

export default new VueRouter({
  routes,
  base: __dirname,
  mode: 'history'
});
