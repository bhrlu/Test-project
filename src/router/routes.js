
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('pages/IndexPage.vue')
    }]
  },
  {
    path: '/admin',
    component: () => import('layouts/AuthtenticatonLayout.vue')

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/authentication/IndexPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
