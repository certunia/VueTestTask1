import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main.vue";
import PopupContent from "../components/PopupContent.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "/popup",
          component: PopupContent
        }
      ]
    }
  ]
});
