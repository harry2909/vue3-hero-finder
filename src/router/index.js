import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SuperHeroSearch.vue'
import ViewHero from '../views/ViewHero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hero/:id',
    name: 'hero',
    component: ViewHero,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
