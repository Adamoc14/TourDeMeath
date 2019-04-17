import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import store from "./store";
import Routes from "./router";

Vue.config.productionTip = false;

/* eslint-disable */ 
const $ = require("jquery");
Window.JQuery = require("jquery-confirm");

Vue.use(VueRouter);
Vue.use(VueResource);

const Router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount("#app");