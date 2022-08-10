import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/pages/login/index.vue';
import Home from '@/pages/Home/index.vue';
import Users from '@/pages/users/index.vue';
import Shop from '@/pages/shop/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'content',
    component: Home,
    redirect: '/home/users',
    children: [
      { path: 'users', component: Users },
      { path: 'shop', component: Shop }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
