import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Icon from '@mdi/react';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { mdiPencil, mdiHome } from '@mdi/js';

function Header(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [showModal, setShowModal] = useState(false);

  const openInput = () => setShow(true);
  const closeInput = () => setShow(false);

  const handleSave = () => {
    closeInput();
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Stack direction="horizontal" gap={3}>
      {!show && (
        <h1>
          {name}{' '}
          {props.userRole === "Creator" ? (
            <>
              {props.mainPage === false ? (<Button variant="light" onClick={openInput}>
                <Icon path={mdiPencil} size={1} />
              </Button>) : (null)}
            </>
          ) : (null)}
        </h1>
      )}

      {show && (
        <>
          <Form.Control
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="success" onClick={handleSave} style={{ marginRight: "50%" }}>
            Save
          </Button>
        </>
      )}

      <div className='p-2 ms-auto'>
        { props.mainPage === false ? (
          <Button variant="light" onClick={openModal}>
            <Icon path={mdiHome} size={1} />
          </Button>) : (null)
        }
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Back to main</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to go back to main?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            No
          </Button>
          <Button variant="success" onClick={closeModal}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
}

export default Header;