const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Route1', component: () => import('pages/IndexPage.vue') },
      { path: '/route2', name: 'Route2', component: () => import('pages/IndexPage2.vue') },
      { path: '/route3', name: 'Route3', component: () => import('pages/IndexPage2.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
