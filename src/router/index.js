import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home/HelloWorld',
      component: HelloWorld
    }
  ]
})
