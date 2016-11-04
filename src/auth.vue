<script>
  import Vue from 'vue';
  export default  {
    data: {
      isLogin: false
    },
    login(userName, pass, callback)
    {
      Vue.http.get('/test/response.json', {
        params: {
          userName: userName,
          pass    : pass
        }
      }).then(rep=> rep.json()).then(data=> {
        if (data.code == 200) {
          localStorage.token = 'isLogin';
          callback && callback();
        }
      }).catch(err=> {
        console.err(22222, err)
      });
    }
    ,

    getToken()
    {
      return localStorage.token
    }
    ,

    logout(callback)
    {
      if (this.isLogin()) {
        localStorage.removeItem('token');
        callback && callback();
      }
    }
    ,

    isLogin()
    {
      return !!localStorage.token
    }
  }
</script>

