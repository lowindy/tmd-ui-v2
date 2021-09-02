import Vue from 'vue';
import '@/assets/css/index.scss'; // global css
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import ElementUI from 'element-ui';
import common from './utils/common';
import httpClient from './utils/http.client';
import SvgIcon from '@/components/svgIcon/index.vue'; // svg组件
import '@/icons/index.js'; // svg组件
import utilHelper from './utils/util.helper';
import './utils/string.helper';
Vue.config.productionTip = false;
Vue.component('svg-icon', SvgIcon);
Vue.use(httpClient);
Vue.use(ElementUI);
Vue.use(common);
Vue.use(utilHelper);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
