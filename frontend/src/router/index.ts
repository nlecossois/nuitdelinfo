import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GuessView from '../views/GuessView.vue'
import QuizView from '../views/QuizView.vue'
import MapView from '../views/MapView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
        {
      path: '/guess',
      name: 'guess',
      component: GuessView
    },
        {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    },
        {
      path: '/map',
      name: 'map',
      component: MapView
    },
  ]
})

export default router
