import React, { useState } from 'react'


function TodoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");

  function handleInputChange(event) {
    setnewTask(event.target.value);
  };

  function addTask() {
    if (newTask.trim() !== "") {                   //if statement to avoid empty input field add as task.
      setTasks(t => [...t, newTask]);  //used the prev state of tasks represented as t.
      setnewTask("");                  //reset input field after adding task
    }
  };

  function deleteTask(index) {         //delete task: takes in a parameter of the element to be deleted.

    const updatedTasks = tasks.filter((_, i) => i !== index);  // (.filter) we get each elements(_) with their each index(i) during iteration__(=>)so if the current element(_) we want to delete is !== to the deleteTask(index) put the element in the new updatedtasks element, if it is equal (i === index) then delete it.
    setTasks(updatedTasks);            //new array of updated tasks excluding the deleted element ( _ )
  };

  function moveTaskUp(index) {

  };

  function moveTaskDown(index) {

  };

  return (
    <div className="todo-list">

      <h1>Todo-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          classname="add-button"
          onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}> {/* added arrow function so not to call the function immediately onClick */}
              Delete
            </button>

            <button
              className="up-button"
              onClick={() => moveTaskUp(index)}> {/* added arrow function so not to call the function immediately onClick */}
              ⬆️
            </button>

            <button
              className="down-button"
              onClick={() => moveTaskDown(index)}> {/* added arrow function so not to call the function immediately onClick */}
              ⬇️
            </button>
          </li>
        )}
      </ol>

    </div>
  );
};

export default TodoList;