import React, { createContext, useState } from "react";

// 1️⃣ Create context
export const UserContext = createContext();

// 2️⃣ Create provider component
export const UserProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ islogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};
