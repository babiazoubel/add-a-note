import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
    });
    setTasks(newTasks);
  };

  const handleTaskAdd = (taskText, taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        text: taskText,
        title: taskTitle,
        id: uuidv4(), //set an random id number from npm library
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
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
        />
      </div>
    </>
  );
};

export default App;
