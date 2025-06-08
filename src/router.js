import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/pinea/HelloWorld.vue'
import Home from './pages/Home.vue'
import Completed from './pages/Completed.vue'
import Parent from './components/vitest-1/parent.vue'
import Grandparent from './components/vitest-1/grandparent.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: Home },
    { path: '/completed', component: Completed },
    { path: '/parent', component: Parent },
    { path: '/grandparent', component: Grandparent },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})