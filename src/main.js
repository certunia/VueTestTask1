import Vue from "vue";
import store from './store';

import "wicg-inert";

import router from "./router";

import App from "./App.vue";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  vuetify,
  router
}).$mount("#app");
