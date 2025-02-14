import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AuthContext from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user.role);
      setEmployeeData(user.data); //So that employee data is kept saved on page refresh.
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("Admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (userData) {
      const loggedInUser = userData.employees.find(
        (employee) => email == employee.email && password == employee.password
      );
      if (loggedInUser) {
        setUser("User");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "User", data: loggedInUser })
        );
        setEmployeeData(loggedInUser);
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "Admin" ? (
        <AdminDashboard setUser={setUser} />
      ) : user == "User" ? (
        <EmployeeDashboard setUser={setUser} data={employeeData} />
      ) : null}
    </>
  );
};

export default App;
