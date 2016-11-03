<template>
  <div>
    <p>Welcome home</p>
    <div>
      <input v-model="query" type="text">
      <button @click="reverse()">reverse</button>
      <transition-group
        name="staggered-fade"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li
          v-for="(item, index) in computedList"
          :key="item.msg"
          :data-index="index"
        >{{ item.msg }}
        </li>
      </transition-group>
    </div>
    <div>
      <router-link to="/home/child1">child1</router-link>
      <router-link to="/home/child2">child2</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate';
  export default {
    data() {
      return {
        query: '',
        list : [
          {msg: 'Bruce Lee'},
          {msg: 'Jackie Chan'},
          {msg: 'Chuck Norris'},
          {msg: 'Jet Li'},
          {msg: 'Kung Fury'}
        ]
      }
    },
    computed: {
      computedList() {
        return this.list.filter((item)=> {
          return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
        })
      }
    },
    watch   : {
      list(){
        console.log('list change:', this.list)
      }
    },
    methods : {
      beforeEnter (el) {
        el.style.opacity = 0;
        el.style.height  = 0
      },
      enter (el, done) {
        var delay = el.dataset.index * 150;
        setTimeout(()=> {
          Velocity(
            el,
            {opacity: 1, height: '1.6em'},
            {complete: done}
          )
        }, delay)
      },
      leave (el, done) {
        var delay = el.dataset.index * 150;
        setTimeout(()=> {
          Velocity(
            el,
            {opacity: 0, height: 0},
            {complete: done}
          )
        }, delay)
      },
      reverse () {
//        this.list.reverse();
        this.list.length = 3;
      }
    },
    mounted(){
      console.log('home is mounted!')
    }
  }
</script>
