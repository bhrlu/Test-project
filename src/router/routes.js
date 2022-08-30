
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'course',
        name: 'Course',
        component: () => import('pages/courses/IndexPage.vue')
      },
      {
        path: 'about',
        name: 'AboutUs',
        component: () => import('pages/AboutUs.vue')
      },
      {
        path: 'contact',
        name: 'ContactUs',
        component: () => import('pages/ContactUs.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('pages/user-profile/IndexPage.vue')
      }
    ]
  },
  // {
  //   path: '/admin',
  //   component: () => import('layouts/AuthtenticatonLayout.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/admin',
    component: () => import('layouts/AuthtenticatonLayout.vue'),
    children: [
      {
        path: 'admin/products',
        name: 'Products',
        meta: {
          requiresAuth: true
        },
        component: () => import('pages/products/IndexPage.vue')
      }
    ]
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
