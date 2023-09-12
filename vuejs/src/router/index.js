import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TokenView from '../views/TokenView.vue'
import SearchTokenView from '../views/SearchTokenView.vue'

const routes = [
  {
    path: '/token',
    name: 'Token',
    component: TokenView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchTokenView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
