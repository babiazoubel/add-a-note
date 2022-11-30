import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAdd }) => {
  const [inputData, setImputData] = useState('');
  const [inputTitle, setInputTitle] = useState('');

  const handleImputChange = (e) => {
    setImputData(e.target.value);
  };
  const handleImputTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.length > 0) {
      handleTaskAdd(inputTitle, inputData);
    }

    setImputData(''); //to clean the input after
    setInputTitle('');
  };

  return (
    <div className="add-task-container">
      <form className="add-task-input-container">
        <input
          onChange={handleImputTitleChange}
          value={inputTitle}
          id="title"
          type="text"
          placeholder="Title"
          className="add-task-title"
        ></input>
        <textarea
          required
          onChange={handleImputChange}
          value={inputData}
          name="textarea"
          id="textarea"
          className="add-task-input"
          type="text"
          placeholder="Your notes..."
        ></textarea>
      </form>

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Add</Button>
      </div>
    </div>
  );
};

export default AddTask;
