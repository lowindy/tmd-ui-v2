import Vue from 'vue';
import Router from 'vue-router';
// 页面模块
import LayoutView from '@/layouts/default';
import HomeView from '@/views/home.vue';

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(Router);
const router = new Router({
  routes: [
    // 不带框架的页面
    {
      path: '/',
      redirect: '/home'
    },
    // 带框架的页面路由
    {
      path: '/layout',
      name: 'layout',
      component: LayoutView,
      meta: {
        needAuth: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
          meta: {
            needAuth: true
          }
        }
      ]
    }
  ]
});
export default router;
