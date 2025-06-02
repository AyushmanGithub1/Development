import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/Home.vue'
import Completed from './pages/Completed.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: Home },
    { path: '/completed', component: Completed },

]

export default createRouter({
  history: createWebHistory(),
  routes,
})