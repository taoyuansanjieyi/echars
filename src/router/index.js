import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/general',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/general',
    name: 'CommonReportGeneral',
    component: () => import('../views/General.vue')
  },
  {
    path: '/user',
    name: 'CommonReportUser',
    component: () => import('../views/User.vue')
  },
  {
    path: '/flow',
    name: 'CommonReportFlow',
    component: () => import('../views/Flow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
