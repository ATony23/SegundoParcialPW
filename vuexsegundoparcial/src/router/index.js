import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import EndTodos from '../views/EndTodos.vue'
import Client from '../views/Client.vue'
import UpdateInfo from '../views/UpdateInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },
  {
    path: '/todos',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/endTodos',
    name: 'EndTodos',
    component: EndTodos
  },
  {
    path: '/updateInfo',
    name: 'UpdateInfo',
    component: UpdateInfo
  },
  // {
  //   path: '/done',
  //   name: 'Done',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DoneTasks.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
