import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@pages/Home.vue'
import NotFoundPage from '@pages/errors/404.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  // { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: NotFoundPage }
]

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
})