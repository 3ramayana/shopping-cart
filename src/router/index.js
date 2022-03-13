import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import Checkout from "../components/Checkout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Products,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
  ],
});

export default router;
