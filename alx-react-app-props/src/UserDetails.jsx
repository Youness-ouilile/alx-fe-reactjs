import React,{userContext} from "react";
import userContext from "./UserContext";

function UserDetails({ userData }) {
    const user = useContext(UserContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;