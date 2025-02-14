import AdminPageTasks from "../AD Parts/AdminPageTasks";
import Header from "../ED Parts/Header";
import CreateTask from "../AD Parts/CreateTask";
import { Outlet, useLocation } from "react-router-dom";
const AdminDashboard = ({ setUser }) => {
  const location = useLocation();
  const isEmployeePage = location.pathname.startsWith("/ems/employee-info");
  return (
    <div className="w-full h-screen p-10">
      <Header setUser={setUser} />
      <CreateTask />
      {isEmployeePage ? <Outlet /> : <AdminPageTasks />}
    </div>
  );
};

export default AdminDashboard;
