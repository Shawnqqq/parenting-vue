import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';

Vue.use(Router)


const appRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default appRouter;
