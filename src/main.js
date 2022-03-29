import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Layout from "@/layouts/Layout.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Shop from "@/views/Shop.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import Checkout from "@/views/Checkout.vue";
import CheckoutComplete from "@/views/CheckoutComplete.vue";

// routes

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard,
      },
      {
        path: '/admin/settings',
        component: Settings,
      },
      {
        path: '/admin/tables',
        component: Tables,
      },
      {
        path: '/admin/maps',
        component: Maps,
      },
    ],
  },
  {
    path: '/index',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: '/shop',
        name: 'shop',
        component: Shop,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true,
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
      },
      {
        path: '/checkout/complete/:id',
        name: 'checkoutComplete',
        component: CheckoutComplete,
        props: true,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: '/',
    component: Index,
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
