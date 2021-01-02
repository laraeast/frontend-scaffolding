require('./bootstrap');

import Vue from 'vue';

Vue.component('example-component', require('./components/ExampleComponent').default);
Vue.component('navbar', require('./components/NavbarComponent').default);

const app = new Vue({
  el: '#app',
});

document.querySelectorAll('.navbar .trigger').forEach((trigger) => {
  trigger.addEventListener('click', el => {
    el.preventDefault();
    document.querySelectorAll('.navbar li > ul').forEach((ul, i) => {
      if (el.target.nextElementSibling === ul) {
        ul.style.display = 'block';
      }else {
        ul.style.display = 'none';
      }
    });
  })
});