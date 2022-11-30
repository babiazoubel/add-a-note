import React from 'react';
import './Task.css';
import moment from 'moment';

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const date = `(${moment().format('MMM Mo HH:mm A')})`;
  return (
    <div className="task-container">
      <div className="task-container-text">
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.text}
          <span className="date">{date}</span>
        </div>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>
      </div>
      <div
        className="button-container"
        onClick={() => {if(window.confirm('Are you sure you want to delete your note?')) {handleTaskRemove(task.id)}}}>
        <button className="remove-task-button">X</button>
      </div>
    </div>
  );
};

export default Task;
