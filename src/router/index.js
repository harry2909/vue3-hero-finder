import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SuperHeroSearch.vue'
import ViewHero from '../views/ViewHero.vue'
import TopTrump from '../views/TopTrump.vue'

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
  },
  {
    path: '/top-trump',
    name: 'top-trump',
    component: TopTrump,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
