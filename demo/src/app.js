//Note: For this demo we are referencing Vue, via its CDN. See index.html.
//import Vue from 'vue';
import App from './App.vue';

new Vue({
	render: h => h(App)
}).$mount('#app');
