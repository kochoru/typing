import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Typing from '@/components/Typing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/typing',
      name: 'Typing',
      component: Typing
    }
  ]
})
