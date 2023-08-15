import Vue from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";

import "@/assets/style.scss";

const pinia = createPinia();

Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(pinia);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
