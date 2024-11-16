import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '2px solid gray', padding: '12px', margin: '12px' }}>
      <h2 style={{ color: 'red' }}>Name: {props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
      
    </div>
  );
};
export default UserProfile ;