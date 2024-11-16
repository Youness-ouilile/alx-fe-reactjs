import React,{userContext} from "react";
import userContext from "./UserContext";

function UserDetails({ userData }) {
    const userData = UseContext(userContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;