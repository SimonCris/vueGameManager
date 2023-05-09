import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './firebase';
import { rtdbPlugin as VueFire } from 'vuefire'

/** Aggiunta di Bootstrap e Firebase a Vue */
Vue.use(BootstrapVue);
Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
