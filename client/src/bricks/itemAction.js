// Action.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiCartPlus } from '@mdi/js';

const Action = ({ onAddItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemType, setNewItemType] = useState('ks'); // Default type is 'ks'

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => {
    setShowModal(false);
    setNewItemName('');
    setNewItemQuantity('');
    setNewItemType('ks');
  };

  const handleAddItem = () => {
    // Validate input (you can add more sophisticated validation)
    if (newItemName.trim() === '' || isNaN(newItemQuantity) || newItemQuantity <= 0) {
      alert('Please enter valid item information.');
      return;
    }

    // Create a new item object
    const newItem = {
      id: Date.now(), // You can use a more robust ID generation method
      name: newItemName,
      quantity: parseInt(newItemQuantity, 10),
      type: newItemType,
    };

    // Pass the new item to the parent component
    onAddItems([newItem]);

    // Hide the modal and reset the input fields
    handleHideModal();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
          <Icon path={mdiCartPlus} size={1} /> Add Item
      </Button>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formItemType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={newItemType}
                onChange={(e) => setNewItemType(e.target.value)}
              >
                <option value="ks">ks</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
              </Form.Control>
            <Form.Group controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
            </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Action;