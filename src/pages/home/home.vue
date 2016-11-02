<template>
  <div>
    <p>Welcome home</p>
    <div>
      <router-link to="/home/child1">child1</router-link>
      <router-link to="/home/child2">child2</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log('home is mounted!')
    }
  }
</script>
