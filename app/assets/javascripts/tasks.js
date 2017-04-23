/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: ['Take out the garbage', 'Make the bed', 'Mow the lawn']
    }
  });
});
