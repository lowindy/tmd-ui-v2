import Vue from 'vue';
import Vuex from 'vuex';
import setting from '@/store/modules/setting';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    setting,
  },
  strict: debug,
});
