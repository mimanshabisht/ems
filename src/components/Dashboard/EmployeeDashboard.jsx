import Header from "../ED Parts/Header";
import TaskCard from "../ED Parts/TaskCard";
import TaskStatus from "../ED Parts/TaskStatus";

const EmployeeDashboard = ({ data, setUser }) => {
  return (
    <div className="p-10 h-screen">
      <Header data={data} setUser={setUser} />
      <TaskStatus data={data} />
      <h2 className="text-xl font-semibold mt-8">Tasks of the day :</h2>
      <TaskCard data={data} />
    </div>
  );
};

export default EmployeeDashboard;
