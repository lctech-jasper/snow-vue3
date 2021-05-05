import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@pages/Home.vue'
import NotFoundPage from '@pages/errors/404.vue'

const UsersPage = () => import('@pages/users/index.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/users', component: UsersPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

const Router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
})

export default Router