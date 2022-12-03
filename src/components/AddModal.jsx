import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

function AddModal({ title, text, date, id, updateTask }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [taskBody, setTaskBody] = useState(text);
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDate, setTaskDate] = useState(date);

  useEffect(() => {
    setTaskDate(`(${moment().format('MMM Mo HH:mm A')})`);
  }, [taskBody, taskTitle]);

  return (
    <>
      <div>
        <button onClick={handleShow} className="edit-task-button">
          Edit
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to change something?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-task-container">
            <form className="add-task-input-container">
              <input
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                value={taskTitle}
                id="title"
                type="text"
                placeholder="Title"
                className="add-task-title"
              ></input>
              <textarea
                required
                onChange={(e) => {
                  setTaskBody(e.target.value);
                }}
                value={taskBody}
                name="textarea"
                id="textarea"
                className="add-task-input"
                type="text"
                placeholder="Your notes..."
              ></textarea>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleClose();
              e.preventDefault();
              updateTask(id, taskTitle, taskBody, taskDate);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
