import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from "@/vuetify";
import VueApexCharts from 'vue-apexcharts'
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
