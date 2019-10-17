import Vue from 'vue';
import VueRouter from 'vue-router';
import My from '../view/my'

Vue.use(VueRouter);

const routes = [
  {
    path: '/my',
    name: 'My',
    component: My,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
