import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'
import Two from '@/components/two'
import Three from '@/components/three'
import About from '@/components/about'
import Register from '@/components/register'
import Login from '@/components/login'
import Detal from '@/components/template/detal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/detal/:id?',
      name: 'Detal',
      component: Detal
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      redirect:'first'
    }
  ]
})
