import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.css'
import { browserRedirect } from './assets/scripts/util'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    getBrowser() {

      const browser = browserRedirect();
      store.dispatch('setBrowserAsync', browser);

    },
  },
  created() {

    this.getBrowser();
    window.addEventListener('resize', this.getBrowser);

  },
}).$mount('#app')
