const fs = require('fs-extra');
const path = require('path');

function generateRoutes () {
  const routes = [
    { path: '/', component: './pages/Home.vue' },
    { path: '/about', component: './pages/About.vue' }
  ];

  const routesContent = `
    import { createRouter, createWebHistory } from 'vue-router';
    const routes = ${JSON.stringify(routes, null, 2)};
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    export default router;
  `;
  const routesFilePath = path.resolve(process.cwd(), '.xmi/routes.js');

  fs.outputFileSync(routesFilePath, routesContent);
}

module.exports = generateRoutes;
