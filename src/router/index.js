import Vue from 'vue'
import VueRouter from 'vue-router'
import mineRouter from './Mine'
import cinemaRouter from './Cinema'
import movieRouter from './Movie'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    mineRouter,
    cinemaRouter,
    movieRouter,
    {//当什么都不输入的时侯进行路由重点定向到/movie
      path:'/*',
      redirect:'/movie'
    }
  ],
  linkActiveClass:'ac',
  linkExactActiveClass:'active'

})

export default router