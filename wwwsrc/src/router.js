import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Dashboard from "./views/Dashboard.vue";
// @ts-ignore
import VaultDetails from "./views/VaultDetails.vue";
// @ts-ignore
import KeepDetails from "./views/KeepDetails.vue";
// @ts-ignore
import UserKeepsPage from "./views/UserKeepsPage.vue";
// @ts-ignore
import VaultKeepDetails from "./views/VaultKeepDetails.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: authGuard
    },
    {
      path: "/vault/:id",
      name: "vault",
      component: VaultDetails,
      beforeEnter: authGuard
    },
    {
      path: "/myKeeps",
      name: "userKeepsPage",
      component: UserKeepsPage,
      beforeEnter: authGuard
    },

    {
      path: "/keep/:id",
      name: "keep",
      component: KeepDetails,
      //beforeEnter: authGuard
    },

    {
      path: "/vault/:id/keep/:id",
      name: "vaultKeepDetails",
      component: VaultKeepDetails,
      beforeEnter: authGuard
    }
  ]

});
