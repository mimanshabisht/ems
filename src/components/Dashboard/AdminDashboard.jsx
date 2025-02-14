import AdminPageTasks from "../AD Parts/AdminPageTasks";
import Header from "../ED Parts/Header";
import CreateTask from "../AD Parts/CreateTask";

const AdminDashboard = ({ setUser }) => {
  return (
    <div className="w-full h-screen p-10">
      <Header setUser={setUser} />
      <CreateTask />
      <AdminPageTasks />
    </div>
  );
};

export default AdminDashboard;
