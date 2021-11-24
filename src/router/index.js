import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {title: 'Логин'},
  },
  {
    path: '/administration',
    name: 'administration',
    component: () => import('../views/private/Administration.vue'),
    meta: {title: 'Администрирование', auth: true},
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/private/Create.vue'),
    meta: {title: 'Создание пользователя', auth: true},
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../views/private/Update.vue'),
    meta: {title: 'Редактирование пользователя', auth: true},
  },
  {
    path: '/delete',
    name: 'delete',
    component: () => import('../views/private/Delete.vue'),
    meta: {title: 'Удаление пользователя', auth: true},
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: () => import('../views/private/Monitoring.vue'),
    meta: {title: 'Мониторинг', auth: true},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    ...routes,
  ]
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth);

  document.title = to.meta.title;

  if(requireAuth && store.state.token === '') {
    next('/login')
  } else {
    next()
  }

});

export default router;
