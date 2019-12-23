import Vue from 'vue'
import VueRouter from 'vue-router'
import Quizzes from '../views/Quizzes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'quizzes',
    component: Quizzes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/game/:quizIndex',
    name: 'game',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
