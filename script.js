// Function to add a task to the list 
function myTask() {
    // Get the input value
    var task = document.getElementById("addtask").value;
    
    // Ensure the task is not empty
    if (task.trim() !== "") {
        // Create a new list item element
        var li = document.createElement("li");
        li.textContent = task;

        // Add a "Delete" button to each task
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function() {
            this.parentElement.remove();  // Removes the list item
        };

        // Add a "Done" button to each task
        var doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.onclick = function() {
            this.parentElement.style.textDecoration = "line-through";  // Marks the task as done
        };

        // Append buttons to the list item
        li.appendChild(deleteButton);
        li.appendChild(doneButton);

        // Append the list item to the task list
        document.getElementById("taskList").appendChild(li);

        // Clear the input field after adding the task
        document.getElementById("addtask").value = "";
    }
}

// Function to clear all tasks
function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}



/*
 Line-by-Line Explanation

 `function myTask() {`
-Purpose: 
This line defines a function named `myTask`. This function is responsible for adding a task to the to-do list when the user clicks the "Add Task" button.

`var task = document.getElementById("addtask").value;`
-Purpose: 
This line retrieves the value that the user entered in the input field with the `id="addtask"`. The value is stored in the variable `task`.

`if (task.trim() !== "") {`
-Purpose: 
This line checks if the `task` variable is not empty. The `trim()` function removes any whitespace from both ends of the string, ensuring that even if the user only entered spaces, it will be considered empty. The task is only added if it's not empty.

`var li = document.createElement("li");`
-Purpose: 
This line creates a new HTML `<li>` (list item) element. This element will represent an individual task in the to-do list.

`li.textContent = task;`
-Purpose:
 This line sets the text content of the newly created `<li>` element to the value stored in the `task` variable. This means the task text will appear inside the list item.

`var deleteButton = document.createElement("button");`
-Purpose: 
 This line creates a new HTML `<button>` element. This button will be used to delete the task.

`deleteButton.textContent = "X";`
-Purpose:
 This line sets the text inside the delete button to "X". This indicates that clicking this button will remove the associated task.

`deleteButton.onclick = function() { this.parentElement.remove(); };`
-Purpose:
 This line assigns a function to the `onclick` event of the delete button. When the delete button is clicked, the function will remove the parent element of the button (which is the `<li>` element representing the task) from the list. The `this.parentElement.remove();` part targets the list item containing the delete button.

`var doneButton = document.createElement("button");`
-Purpose: 
This line creates another HTML `<button>` element, which will be used to mark the task as done.

`doneButton.textContent = "Done";`
-Purpose:
 This line sets the text inside the done button to "Done". This indicates that clicking this button will mark the task as completed.

`doneButton.onclick = function() { this.parentElement.style.textDecoration = "line-through"; };`
-Purpose: 
This line assigns a function to the `onclick` event of the done button. When the done button is clicked, the function will add a line-through style to the text of the parent element (the `<li>` element). This visually indicates that the task is completed.

`li.appendChild(deleteButton);`
-Purpose:
 This line appends the delete button as a child of the `<li>` element. This means the delete button will appear inside the list item, next to the task text.

`li.appendChild(doneButton);`
-Purpose:
 This line appends the done button as a child of the `<li>` element, so it will also appear inside the list item, next to the task text.

`document.getElementById("taskList").appendChild(li);`
-Purpose:
 This line finds the `<ol>` element with the `id="taskList"` and appends the newly created `<li>` element to it. This effectively adds the task to the visible list on the webpage.

`document.getElementById("addtask").value = "";`
-Purpose:
 This line clears the input field after the task is added to the list by setting its value to an empty string. This allows the user to enter a new task without manually clearing the input field.

`function clearTasks() {`
-Purpose: 
This line defines a new function named `clearTasks`. This function will be used to clear all tasks from the list when the user clicks the "Clear List" button.

`document.getElementById("taskList").innerHTML = "";`
-Purpose:
 This line sets the inner HTML of the `<ol>` element with the `id="taskList"` to an empty string. This effectively removes all the list items, clearing the entire list.

*/