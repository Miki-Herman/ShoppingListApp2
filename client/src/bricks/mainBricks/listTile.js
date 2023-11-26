import React, { useState } from 'react';
import Icon from '@mdi/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingListView from '../../routes/shoppingList';
import { Button, Modal, Stack } from 'react-bootstrap';
import { mdiArchive, mdiCloseThick, mdiArchiveCancel, mdiEye  } from '@mdi/js';


const ListTile = ({ name, username, users, icon, archived, items, onDelete, onArchive, onUnArchive, invited }) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showArchiveModal, setShowArchiveModal] = useState(false);
    const [showListModal, setShowListModal] = useState(false);

    const handleDelete = () => {
        // Show the confirmation modal
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        onDelete();
        setShowDeleteModal(false);
    };

    
    const handleConfirmArchive = () => {
        setShowArchiveModal(false);
    };

    const handleShowListModal = () => {
        setShowListModal(true);
    };

    const handleCloseListModal = () => {
        setShowListModal(false);
    };

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <div className="text-center" style={{marginTop: '18px'}}>{icon}</div>
            <div className="card-body">

                <Stack direction="horizontal" gap={4}>
                    <h5 className="card-title">{name}</h5>
                    <Button variant="outline-info" onClick={handleShowListModal} className='p-2 ms-auto' ><Icon path={mdiEye} size={0.5} /></Button>
                </Stack>

                <p className="card-text">AUTOR: {username}</p>

                {invited? null : <Stack direction="horizontal" gap={2}>
                    <Button variant="danger" onClick={handleDelete}><Icon path={mdiCloseThick} size={1}/></Button>
                    {archived ? (<Button variant='warning' onClick={onUnArchive}><Icon path={mdiArchiveCancel} size={1}/></Button>) : (<Button variant='warning' onClick={onArchive}><Icon path={mdiArchive} size={1}/></Button>)}
                </Stack>}

            </div>

            {/* Delete confirmation modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this list?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>

            {/* Archive confirmation modal */}
            <Modal show={showArchiveModal} onHide={() => setShowArchiveModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Archive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 Are you sure you want to archive this card?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowArchiveModal(false)}>Cancel</Button>
                    <Button variant="info" onClick={handleConfirmArchive}>Yes</Button>
                </Modal.Footer>
            </Modal>

            {/* List modal */}
            <Modal show={showListModal} onHide={handleCloseListModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingListView items={items} users={users} userRole={invited? 'User': 'Creator'}/>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default ListTile;