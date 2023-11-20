// userSwitch.js
import React from 'react';
import { Button } from 'react-bootstrap';

const UserSwitch = ({ userRole, onUserRoleChange }) => {
  const toggleUserRole = () => {
    const newRole = userRole === 'Creator' ? 'Invited' : 'Creator';
    onUserRoleChange(newRole);
  };

  return (
    <div>
      <Button variant="primary" onClick={toggleUserRole}>
        Switch Page View
      </Button>
      <span style={{ marginLeft: '10px' }}>Current Role: {userRole}</span>
    </div>
  );
};

export default UserSwitch;