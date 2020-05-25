

import VueRouter from 'vue-router';
import Vue from 'vue';

import WelcomeApp from './Components/Welcome';
import Planning from './Components/Planning';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    components: {
      content: WelcomeApp,
    },
    beforeEnter: (to, from, next) => {
      next();
    }
  },
  {
    path: '/planning',
    name: 'Planning',
    components: {
      content: Planning,
    },
    beforeEnter: (to, from, next) => {
      next();
    }
  }
];


export default new VueRouter({ routes });
