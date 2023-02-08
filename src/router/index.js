import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/AllBooks')
    },
    {
      path: '/reading-list',
      name: 'reading-list',
      component: () => import('../views/ReadingList')
    },
    {
      path: '/subjects',
      name: 'subjects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "subjects" */ '../views/Subjects')
    }
  ]
})

export default router
