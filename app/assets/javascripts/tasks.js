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
      },
      numberOfIncompleteTasks: function() {
        var count = 0;
        for (var i = 0; i < this.tasks.length; i++) {
          if (!this.tasks[i].completed) {
            count += 1;
          }
        }
        return count;
      }
    }
  });
});
