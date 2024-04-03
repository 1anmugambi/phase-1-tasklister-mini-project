document.addEventListener('DOMContentLoaded', function() {
  //write your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get the task description from the input field
      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value;

      // Clear the input field after getting the task description
      taskInput.value = '';

      // Create a new list item to display the task
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      const deleteButton=document.createElement("button")
      deleteButton.textContent='x'

      // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the new task item to the task list
      taskList.appendChild(taskItem);
  });
});
