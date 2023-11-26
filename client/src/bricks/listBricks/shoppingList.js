// ShoppingList.js
import React, { useState } from 'react';
import './style.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiWindowClose } from '@mdi/js';
import Action from './itemAction';

const ShoppingList = (props) => {
  const [items, setItems] = useState(props.items);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  const handleRename = (id, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleTypeChange = (id, newType) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, type: newType } : item))
    );
  };

  const handleShowDeleteModal = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const handleHideDeleteModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleDelete = () => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemToDelete));
    handleHideDeleteModal();
  };

  const handleAddItems = (newItems) => {
    // Generate unique IDs for the new items
    const itemsWithIds = newItems.map((item) => ({ ...item, id: generateRandomId() }));
    setItems((prevItems) => [...prevItems, ...itemsWithIds]);
  };

  const generateRandomId = () => Math.floor(Math.random() * 1000000);

  return (
    <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px' }}>
      <Table borderless>
        <thead>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className='quantity-column'>
                <div style={{ opacity: checkedItems[item.id] ? 0.5 : 1 }}>
                  <Form.Control
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className='type-column' style={{ opacity: checkedItems[item.id] ? 0.5 : 1 }}>
                  <Form.Control
                    as="select"
                    value={item.type}
                    onChange={(e) => handleTypeChange(item.id, e.target.value)}
                  >
                    <option value="ks">ks</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                  </Form.Control>
                </div>
              </td>
              <td>
                <div className='name-column' style={{ opacity: checkedItems[item.id] ? 0.5 : 1 }} >
                  <Form.Control
                    type="text"
                    value={item.name}
                    onChange={(e) => handleRename(item.id, e.target.value)}
                  />
                </div>
              </td>
              <td className='checkbox-column'>
                <Form.Check
                  type='checkbox'
                  checked={checkedItems[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  className='checkbox'
                />
              </td>
              <td className='delete-button'>
                <Button variant='danger' size= 'sm' onClick={() => handleShowDeleteModal(item.id)}>
                  <Icon path={mdiWindowClose} size={1} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleHideDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Action Component for Adding New Items */}
      <Action onAddItems={handleAddItems} />
    </div>
  );
};

export default ShoppingList;