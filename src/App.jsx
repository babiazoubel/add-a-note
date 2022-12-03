import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import moment from 'moment';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      task.id = taskId;
    });
    setTasks(newTasks);
  };

  const handleTaskAdd = (taskText, taskTitle) => {
    const date = `(${moment().format('MMM Mo HH:mm A')})`;
    const newTasks = [
      ...tasks,
      {
        text: taskText,
        title: taskTitle,
        id: uuidv4(), //set an random id number from npm library
        date: date,
        updateTask: { updateTask },
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const updateTask = (taskId, newTitle, newText, newDate) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: newTitle, title: newText, date: newDate };
      }
      return task;
    });

    setTasks(updatedTask);
  };

 
  return (
    <>
      <div className="container">
        <h1>NOTES</h1>
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
          updateTask={updateTask}
        />
      </div>
    </>
  );
};

export default App;
