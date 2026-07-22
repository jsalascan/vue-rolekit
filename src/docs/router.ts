import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('./pages/HomePage.vue') },
    { path: '/r-button', name: 'r-button', component: () => import('./pages/RButtonPage.vue') },
    { path: '/r-input', name: 'r-input', component: () => import('./pages/RInputPage.vue') },
    {
      path: '/r-textarea',
      name: 'r-textarea',
      component: () => import('./pages/RTextareaPage.vue'),
    },
    { path: '/r-select', name: 'r-select', component: () => import('./pages/RSelectPage.vue') },
    {
      path: '/r-checkbox',
      name: 'r-checkbox',
      component: () => import('./pages/RCheckboxPage.vue'),
    },
    { path: '/r-switch', name: 'r-switch', component: () => import('./pages/RSwitchPage.vue') },
    {
      path: '/r-radio-group',
      name: 'r-radio-group',
      component: () => import('./pages/RRadioGroupPage.vue'),
    },
    {
      path: '/r-date-picker',
      name: 'r-date-picker',
      component: () => import('./pages/RDatePickerPage.vue'),
    },
    { path: '/r-table', name: 'r-table', component: () => import('./pages/RTablePage.vue') },
    { path: '/r-badge', name: 'r-badge', component: () => import('./pages/RBadgePage.vue') },
    { path: '/r-card', name: 'r-card', component: () => import('./pages/RCardPage.vue') },
    { path: '/r-avatar', name: 'r-avatar', component: () => import('./pages/RAvatarPage.vue') },
    {
      path: '/r-pagination',
      name: 'r-pagination',
      component: () => import('./pages/RPaginationPage.vue'),
    },
    {
      path: '/r-breadcrumb',
      name: 'r-breadcrumb',
      component: () => import('./pages/RBreadcrumbPage.vue'),
    },
    { path: '/r-tabs', name: 'r-tabs', component: () => import('./pages/RTabsPage.vue') },
    {
      path: '/r-accordion',
      name: 'r-accordion',
      component: () => import('./pages/RAccordionPage.vue'),
    },
    { path: '/r-alert', name: 'r-alert', component: () => import('./pages/RAlertPage.vue') },
    { path: '/r-spinner', name: 'r-spinner', component: () => import('./pages/RSpinnerPage.vue') },
    { path: '/r-tooltip', name: 'r-tooltip', component: () => import('./pages/RTooltipPage.vue') },
    {
      path: '/r-progress-bar',
      name: 'r-progress-bar',
      component: () => import('./pages/RProgressBarPage.vue'),
    },
    {
      path: '/r-skeleton',
      name: 'r-skeleton',
      component: () => import('./pages/RSkeletonPage.vue'),
    },
    { path: '/r-toast', name: 'r-toast', component: () => import('./pages/RToastPage.vue') },
    { path: '/r-modal', name: 'r-modal', component: () => import('./pages/RModalPage.vue') },
  ],
})

export default router
