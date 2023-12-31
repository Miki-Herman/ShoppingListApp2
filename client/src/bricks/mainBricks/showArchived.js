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
        {props.textLang.showArchivedButton}
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size='lg'>
        <Modal.Header closeButton style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
          <Modal.Title>{props.textLang.archivedListHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
          <div className="d-flex flex-wrap">
            {archivedLists.map((list, index) => (
              <ListTile textLang={props.textLang} key={index} name={list.name} archived={list.archived} username={list.username} icon={list.icon} onUnArchive={props.onUnArchive} theme={props.theme}/>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
          <Button variant="secondary" onClick={handleCloseModal}>
            {props.textLang.closeButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowArchived;