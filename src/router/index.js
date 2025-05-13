import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'), // lazy load
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  /**Nested routes */
  /**
  {
    path:"/parent",
    name:"parent",
    children:[
      {
        path:"child", // don't need to add a leading slash
        name:"child",
        component:ChildPage,
      }
    ]
  },
  */
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
