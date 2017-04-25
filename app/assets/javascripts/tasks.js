/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        {text: 'Take out the garbage', completed: false},
        {text: 'Make the bed', completed: false},
        {text: 'Mow the lawn', completed: false}
      ],
      newTaskText: ""
    },
    methods: {
      addTask: function() {
        var newTask = {text: this.newTaskText, completed: false};
        this.tasks.push(newTask);
        this.newTaskText = "";
      },
      toggleComplete: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      }
    }
  });
});
