import { createContext, useState } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleIsAdmin = (e) => {
    e.preventDefault();
    setIsAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
