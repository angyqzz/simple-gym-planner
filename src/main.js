
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Element from 'element-ui';
import css from 'element-ui/lib/theme-chalk/index.css';

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

// configure language
locale.use(lang);

Vue.use(Element);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
