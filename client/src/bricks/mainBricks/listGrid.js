import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTile from './listTile';
import ShowArchived from './showArchived';
import Icon from '@mdi/react';
import { mdiNewspaper } from '@mdi/js';
import { Button, Modal, Form, Stack } from 'react-bootstrap';

const icon = <Icon path={mdiNewspaper} size={1}/>

const ListGrid = (props) => {
  const [list, setLists] = useState([
    { 
      id: 1,
      name: 'Svatomartinská husa',
      username: 'TondaVondra', 
      icon: icon,
      archived: true,
      items:[
        { id: 1, name: 'Husa', quantity: 2, type: 'ks' },
        { id: 2, name: 'Bílé zelí', quantity: 1, type: 'kg' },
        { id: 3, name: 'Červené zelí', quantity: 3, type: 'g' },
        { id: 4, name: 'Mouka', quantity: 5, type: 'ks' },
        { id: 5, name: 'Rohlíky', quantity: 10, type: 'ks' },
      ],
      invitedUsers:['JandaPecinka']
    },
    { 
      id: 2,
      name: 'Měsíční nákup',
      username: 'TondaVondra', 
      icon: icon,
      archived: false,
      items:[],
      invitedUsers:['JandaPecinka']
    },
    { 
      id: 3,
      name: 'Horbach',
      username: 'TondaVondra', 
      icon: icon,
      archived: false,
      items:[],
      invitedUsers:[]
    },
    { 
      id: 4,
      name: 'Nákup Ikea',
      username: 'TondaVondra', 
      icon: icon,
      archived: true,
      items:[],
      invitedUsers:['JandaPecinka']
    },
    { 
      id: 5,
      name: 'Nedělní oběd', 
      username: 'JandaPecinka',
      icon: icon,
      archived: false,
      items:[],
      invitedUsers:['TondaVondra']
    },
    { 
      id: 6,
      name: 'Oslava narozenin', 
      username: 'JandaPecinka',
      icon: icon,
      archived: true,
      items:[],
      invitedUsers:[]
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newName, setNewName] = useState('');

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
    setNewName('');
  };

  const archiveList = (id) => {
    const updatedLists = list.map(list => {
        if (list.id === id) { 
            return {...list, archived: true}
        }
        return list
    })
    setLists(updatedLists);
  }

  const deleteList = (id) => {
    const deletedList = list.filter(list => list.id !== id);
    setLists(deletedList);
  };

  const createNewList = () => {
    const newList = {
      id: list.length + 1,
      name: newName,
      username: props.userName,
      icon: icon,
      archived: false,
      items:[],
      invitedUsers:[]
    }
    setLists([...list, newList]);
    setShowCreateModal(false);
    setNewName('');
  };

  const showList = props.invited ? list.filter(item => item.username !== props.userName && item.invitedUsers.includes(props.userName)) : list.filter(item => item.username === props.userName);

  return(
      <div className="list">
        <div className="d-flex flex-wrap">
          {showList.map((list, index) => (
            <ListTile textLang={props.textLang} key={index} invited={props.invited} items={list.items} users={list.invitedUsers} name={list.name} username={list.username} icon={list.icon} archived={list.archived} theme={props.theme} onDelete={() => deleteList(list.id)} onArchive={() => archiveList(list.id)}/>
          ))}
        </div>
        
        {!props.invited ? <Stack direction="horizontal" gap={2}><Button variant="primary" onClick={handleShowCreateModal}>{props.textLang.createListButton}</Button><ShowArchived theme={props.theme} textLang={props.textLang} list={list} user={props.userName}/></Stack> : null}
        
        <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
          <Modal.Header closeButton style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
            <Modal.Title>{props.textLang.createListButton}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>{props.textLang.nameHeader}</Form.Label>
                <Form.Control
                    style={{
                      background: (props.theme === 'dark'? 'grey': "white")
                    }}
                  type="text"
                  placeholder="Enter name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer style={{background: (props.theme === 'dark'? 'gray': "white"), color: (props.theme === 'dark'? 'white': "black")}}>
            <Button variant="secondary" onClick={handleCloseCreateModal}>
              {props.textLang.closeButton}
            </Button>
            <Button variant="primary" onClick={createNewList}>
              {props.textLang.createListButton}
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
  );
};

export default ListGrid;