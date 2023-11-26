import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './bricks/listBricks/header';
import ListGrid from './bricks/mainBricks/listGrid';
import { Stack, Button } from 'react-bootstrap';


function App() {


  const [user, setUser] = useState('TondaVondra');
  const switchUser = () => {
    setUser((userRole) => (userRole === "TondaVondra" ? "JandaPecinka" : "TondaVondra"));
  };

  return (
    <div className='App'>
      <div className='change-user'>
      <Stack direction="horizontal" gap={3}>
        <Button variant= "warning" onClick={switchUser}>Change User View</Button>
        <h4>Current User: {user}</h4>
      </Stack>
      </div>

      {/* My shopping lists part */}
      <div className='header'><Header mainPage={true} name='My Shopping Lists'/></div>
      <div className='list'><ListGrid userName={user} /></div>

      {/* Invited to shopping lists part */}
      <div className='header'><Header mainPage={true} name='Invited to shopping lists'/></div>
      <div className='list'><ListGrid userName={user} invited={true}/></div>

    </div>
  );
}

export default App;
