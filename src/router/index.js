import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/movie',
    redirect:'/movie/nowplaying',
    component: () => import('@/views/Movie'),
    children: [
      {
        path: 'city',
        component: () => import('@/components/City')
      },
      {
        path: 'comingsoon',
        component: () => import('@/components/Comingsoon')
      },
      {
        path: 'nowplaying',
        component: () => import('@/components/Nowplaying')
      },
      {
        path: 'search',
        component: () => import('@/components/Search')
      },

    ]
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path:'/*',
    redirect: '/movie'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass:'ac'
  
})

export default router