require('./bootstrap');

import Vue from 'vue';

Vue.component('example-component', require('./components/ExampleComponent').default);

const app = new Vue({
  el: '#app',
});