import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const AddList = ({ list, setList, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewName('');
    setNewUsername('');
  };

  const handleAddList = () => {
    if (newName) {
      const newList = { name: newName, username: user };
      handleCloseModal();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Create List
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddList}>
            Add list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddList;