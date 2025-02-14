import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const emp = localStorage.getItem("employees");
    if (!emp) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

//New features to add: Admin can view tasks of each employee, can delete tasks, employee can complete or fail a task.
