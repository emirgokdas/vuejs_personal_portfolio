import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Home/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home/HelloWorld',
      component: Dashboard
    }
  ]
})
