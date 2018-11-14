import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Editor from './views/ScriptEditor.vue'
import Empty from './views/Empty.vue'
import Mine from './views/Mine.vue'

Vue.use(Router)

const Routes = [
  {
    path: '/empty',
    name: 'empty',
    component: Empty
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  }
]

export default new Router({
  routes: Routes
})
