/**
 * @license Created by felix on 16-11-2.
 * @email   307253927@qq.com
 */
'use strict';


export default class Auth {
  login(userName, pass, callback) {
    console.log(userName, pass);
    localStorage.token = 'isLogin';
    callback && callback();
  }
  
  getToken() {
    return localStorage.token
  }
  
  logout(callback) {
    if(this.loggedIn()){
      localStorage.removeItem('token');
      callback && callback();
    }
  }
  
  loggedIn() {
    return !!localStorage.token
  }
}
