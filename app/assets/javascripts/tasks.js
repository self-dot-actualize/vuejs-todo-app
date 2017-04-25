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
      },
      removeCompletedTasks: function() {
        var incompleteTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if (!this.tasks[i].completed) {
            incompleteTasks.push(this.tasks[i]);
          }
        }
        this.tasks = incompleteTasks;
      }
    }
  });
});

var array = [1, "a", "b", 334, "a", 3, 34, "w"];
// delete all letters from the array
// OR
// create a new array that only contains the numbers
