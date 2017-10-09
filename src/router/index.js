import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog'
import Resume from '@/components/resume'
import Workshop from '@/components/workshop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop
    }
  ],
  mode: 'history'
})
