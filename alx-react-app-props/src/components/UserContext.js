import React, { createContext, useState } from "react";

const UserContext = React.createContext();
export function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        name: "Jane Doe",
        email: "jane.doe@example.com"
    });

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;