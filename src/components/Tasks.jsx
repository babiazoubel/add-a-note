import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove, updateTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
          updateTask={updateTask}
        />
      ))}
    </>
  );
};

export default Tasks;
