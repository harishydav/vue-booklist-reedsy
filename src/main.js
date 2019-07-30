import Vue from "vue/dist/vue.js";

import VueRouter from "vue-router";

Vue.config.productionTip = false;
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import BookList from "./views/BookList.vue";
import Book from "./views/Book.vue";

Vue.use(VueMaterial);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: BookList },
  { path: "/:slug", component: Book }
];

const router = new VueRouter({
  mode: "history",

  routes: routes // short for `routes: routes`
});

new Vue({
  router
}).$mount("#app");
