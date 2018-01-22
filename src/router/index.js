import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Typing from '@/components/Typing'
import Top from '@/components/Top'
import Ranking from '@/components/Ranking'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/thanks',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/typing',
      name: 'Typing',
      component: Typing
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})
