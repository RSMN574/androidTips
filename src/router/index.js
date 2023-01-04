import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import viewA from '../views/view1.vue'
import viewB from '../views/view2.vue'
import viewC from '../views/view3.vue'
import viewD from '../views/view4.vue'
import viewE from '../views/view5.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/viewA',
    name: 'viewA',
    component: viewA
  },{
    path: '/viewB',
    name: 'viewB',
    component: viewB
  },{
    path: '/viewC',
    name: 'viewC',
    component: viewC
  },{
    path: '/viewD',
    name: 'viewD',
    component: viewD
  },{
    path: '/viewE',
    name: 'viewE',
    component: viewE
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
