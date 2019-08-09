import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      component: MSite,
      path: '/msite',
      meta:{
        showFooter: true
      }
    },
    {
      component: Search,
      path: '/search',
      meta:{
        showFooter: true
      }
    },
    {
      component: Order,
      path: '/order',
      meta:{
        showFooter: true
      }
    },
    {
      component: Profile,
      path: '/profile',
      meta:{
        showFooter: true
      }
    },
    {
      component: Login,
      path: '/login'
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
});
