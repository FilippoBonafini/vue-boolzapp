'use strict';

// INIZIALIZZIAMO VUE 
const { createApp } = Vue

// STRUTTURA DI VUE 
createApp({
  data() {
    return {
        hello: 'Ciao Mondo!'
    }
  }
}).mount('#app');
