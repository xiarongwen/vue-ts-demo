import Vue from 'vue';
import VueRouter from 'vue-router';
import My from '../view/my/my'
import Main from '../view/main/main'

Vue.use(VueRouter);

const routes = [
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
