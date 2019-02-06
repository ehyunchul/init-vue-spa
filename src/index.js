// index.js

import Vue from 'vue'
import HelloComponent from './vue/Hello.vue'
import App from './App.vue'

new Vue({
	render: h => h(App)
}).$mount("#app");
