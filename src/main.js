// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import '../static/nicomoji.css'
import App from './App'
import router from './router'
import store from './store/store'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

// 任意のタイミングでフォーカスするためのカスタムディレクティブ
Vue.directive('focus', {
  componentUpdated: function (el, binding) {
    if (binding.value) {
      el.focus()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
