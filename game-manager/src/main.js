import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from "vee-validate";

/** Aggiunta di Bootstrap a Vue */
Vue.use(BootstrapVue);

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "formFields",
  errorBagName: "formErrors"
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
