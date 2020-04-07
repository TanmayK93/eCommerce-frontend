// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSpinners from "vue-spinners";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch();
library.add(faStar);
library.add(faTrash);
library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faEye);
library.add(faShoppingCart);
library.add(faPaperclip);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import App from "./App";
import router from "./router";
import store from "./store/store";

Vue.use(BootstrapVue);
Vue.use(VueSpinners);

Vue.config.productionTip = false;

import VueSession from "vue-session";
Vue.use(VueSession);

/* eslint-disable no-new */

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
