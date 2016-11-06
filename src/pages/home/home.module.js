/**
 * @license Created by felix on 16-11-2.
 * @email   307253927@qq.com
 */
'use strict';

export default {
  path     : '/home' ,alias:'/',
  component: resolve=> {
    require.ensure([], ()=> {
      resolve(require('./home.vue'));
    }, 'home');
    // require.ensure 第三个参数是打包后的模块名, 不给将会是一个随机数;
    // 这里是将这三个文件打包到home.xxx.js文件中
  },
  children : [
    {
      path     : 'child1',
      component: resolve=> {
        require.ensure([], ()=> {
          resolve(require('./child1.vue'));
        }, 'home');
      }
    },
    {
      path     : 'child2',
      component: resolve=> {
        require.ensure([], ()=> {
          resolve(require('./child2.vue'));
        }, 'home');
      }
    }
  ]
  
};