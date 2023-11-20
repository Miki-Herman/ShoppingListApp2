// LeaveAction.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiExitToApp } from '@mdi/js';

const LeaveAction = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const handleShowLeaveModal = () => {
    setShowLeaveModal(true);
  };

  const handleCloseLeaveModal = () => {
    setShowLeaveModal(false);
  };

  return (
    <>
      <Button variant='danger' onClick={handleShowLeaveModal}>
      <Icon path={mdiExitToApp} size={1} /> Leave Shopping List
      </Button>

      <Modal show={showLeaveModal} onHide={handleCloseLeaveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Leave Shopping List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to leave the shopping list?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseLeaveModal}>
            No
          </Button>
          <Button variant='danger' onClick={handleCloseLeaveModal}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeaveAction;