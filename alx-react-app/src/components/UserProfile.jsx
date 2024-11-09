import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>bio: {props.bio}</p>
      
    </div>
  );
};
export default UserProfile ;