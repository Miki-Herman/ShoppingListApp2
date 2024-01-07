import './shoppingLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../bricks/listBricks/header';
import ShoppingList from '../bricks/listBricks/shoppingList';
import UserList from '../bricks/listBricks/userList';
import React from "react";

const ShoppingListView = (props) => {

  return (
      <div className='App'>
          {/* Shopping list part */}
          <div><Header userRole={props.userRole} name={props.name}/></div>
          <div><ShoppingList items={props.items}/></div>

          {/* User list part*/}
          <h1 className='user-header'>Users</h1>
          <div className='user-list'><UserList users={props.users} userRole={props.userRole}/></div>
      </div>
  );
}

export default ShoppingListView;