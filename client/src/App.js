import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './bricks/header';
import ShoppingList from './bricks/shoppingList';
import UserList from './bricks/userList';
import { Stack, Button } from 'react-bootstrap';

function App() {

  const [userRole, setUserRole] = useState('Creator');
  const switchUser = () => {
    setUserRole((userRole) => (userRole === "Creator" ? "Invited" : "Creator"));
  };

  return (
    <div className='App'>
      <div className='change-user'>
      <Stack direction="horizontal" gap={3}>
        <Button variant= "warning" onClick={switchUser}>Change Role View</Button>
        <h4>Current Role: {userRole}</h4>
      </Stack>
      </div>

      {/* Shopping list part */}
      <div><Header userRole={userRole}/></div>
      <div><ShoppingList/></div>

      {/* User list part*/}
      <h1 className='user-header'>Users</h1>
      <div className='user-list'><UserList userRole={userRole}/></div>

    </div>
  );
}

export default App;
