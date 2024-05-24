
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    "path": "/",
    "component": "./pages/Home.vue"
  },
  {
    "path": "/about",
    "component": "./pages/About.vue"
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
