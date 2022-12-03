import React from 'react';
import './Task.css';

import AddModal from './AddModal';

const Task = ({ task, handleTaskRemove, updateTask }) => {
  return (
    <div className="task-container">
      <div className="task-container-text">
        <div className="task-title">
          {task.text} {task.date}
        </div>
        <div className="task-title">{task.title}</div>
      </div>

      <div className="button-container">
        <AddModal
          title={task.text}
          text={task.title}
          id={task.id}
          updateTask={updateTask}
          date={task.date}
        />
        <button
          className="remove-task-button"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete your note?')) {
              handleTaskRemove(task.id);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
