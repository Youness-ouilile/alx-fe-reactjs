import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.Bio}</p>
      
    </div>
  );
};
export default UserProfile ;