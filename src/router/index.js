import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SearchingPage from '@/pages/SearchingPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/om-oss/',
      name: 'About',
      component: About
    },
    {
      path: '/kontakta-oss/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/vi-soker/',
      name: 'SearchingPage',
      component: SearchingPage
    }
  ]
})
