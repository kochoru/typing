import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Typing from '@/components/Typing'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/hello',
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
