// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = [];

function addTask() {
  'use strict';

  // Get the task:
  var task = document.getElementById('task');

  // Reference to where the output goes:
  var output = document.getElementById('output');

  // For the output:
  var message = '';

  // For duplicate checking
  var duplicate = false;

  if (task.value) {

    // Add the item to the array:
    for (var newtask in tasks) {
      console.log("Comparing new: " + task.value + " to old: " + tasks[newtask]);
      if (tasks[newtask].localeCompare(task.value) == 0) {
        duplicate = true;
      }
    }

    if (!duplicate) {
      tasks.push(task.value);
    }

    // Update the page:
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
      message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;

  } // End of task.value IF.

  // Return false to prevent submission:
  return false;

} // End of addTask() function.


function capitalize() {
  'use strict';

  // Reference to where the output goes:
  var output = document.getElementById('output');

  // For the output:
  var message = '';

  for (var task in tasks) {
    tasks[task] = tasks[task].toUpperCase();
  }
  message = '<h2>To-Do</h2><ol>';
  for (var i = 0, count = tasks.length; i < count; i++) {
    message += '<li>' + tasks[i] + '</li>';
  }
  message += '</ol>';
  output.innerHTML = message;

  return false;

}

// Initial setup:
function init() {
  'use strict';
  document.getElementById('theForm').onsubmit = addTask;
  document.getElementById('capitalize').onclick = capitalize;
} // End of init() function.
window.onload = init;