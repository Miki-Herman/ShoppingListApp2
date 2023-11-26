import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ListTile from './listTile';

const ShowArchived = (props) => {

  const archivedLists = props.list.filter(item => item.archived && item.username === props.user)
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="info" onClick={handleShowModal}>
        Show Archived
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Archived Lists</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap">
            {archivedLists.map((list, index) => (
              <ListTile key={index} name={list.name} archived={list.archived} username={list.username} icon={list.icon} onUnArchive={props.onUnArchive  }/>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowArchived;