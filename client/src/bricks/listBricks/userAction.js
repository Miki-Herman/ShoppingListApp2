// AddUser.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';

const AddUser = ({ userRole, addUser }) => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  const handleShowAddUserModal = () => setShowAddUserModal(true);
  const handleCloseAddUserModal = () => setShowAddUserModal(false);

  const handleAddUser = () => {
    // Add the new user with role 'Invited'
    addUser({ name: newUserName, role: 'Invited' });

    // Reset form values and close the modal
    setNewUserName('');
    handleCloseAddUserModal();
  };

  return(
    <>
      <Button variant="primary" onClick={handleShowAddUserModal}>
        <Icon path={mdiAccountPlus} size={1} /> Add User
      </Button>

      <Modal show={showAddUserModal} onHide={handleCloseAddUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddUserModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUser;