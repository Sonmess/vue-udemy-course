import Login from "@/components/Authentication/Login.vue";
import Contact from "@/components/Home/Contact.vue";
import HomePage from "@/components/Home/HomePage.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductList from "@/components/Product/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "contact",
      path: "/contact/",
      component: Contact,
    },
    {
      name: "contact-redirect",
      path: "/contact-us/",
      redirect: { name: "contact" },
    },
    {
      name: "product-list",
      path: "/product-list/",
      component: ProductList,
      beforeEnter: (to, from) => {
        console.log("Before enter action");
        console.log(to, from);
        return true;
      },
    },
    {
      name: "product-detail",
      path: "/product/:productId/:categoryId?",
      component: ProductDetail,
      props: true,
    },
    {
      name: "product-detail-empty",
      path: "/product/",
      component: ProductDetail,
    },
    {
      name: "login",
      path: "/login/",
      component: Login,
    },
    {
      name: "not-found",
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
  linkActiveClass: "active btn btn-primary",
});

router.beforeEach((to, from) => {
  console.log("Global before each");
  console.log(to, from);

  const isAuthenticated = true;
  if (to.name == "home") {
    return true;
  }
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }
  return true;
});

export default router;
