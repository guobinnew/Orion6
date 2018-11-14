import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import messages from './messages'

Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.use(ElementUI)

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
