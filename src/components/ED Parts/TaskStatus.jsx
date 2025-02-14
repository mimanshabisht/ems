import { useContext, useEffect } from "react";

const TaskStatus = ({ data }) => {
  return (
    <div className="flex screen mt-5 gap-5">
      <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-400">
        <h2 className="text-3xl font-semibold text-gray-800">
          {data.taskCounts.newTask}
        </h2>
        <h3 className="text-xl font-medium text-gray-800">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-yellow-400">
        <h2 className="text-3xl font-semibold text-gray-800">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium text-gray-800">Accepted Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-green-400">
        <h2 className="text-3xl font-semibold text-gray-800">
          {data.taskCounts.completed}
        </h2>
        <h3 className="text-xl font-medium text-gray-800">Completed Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-red-400">
        <h2 className="text-3xl font-semibold text-gray-800">
          {data.taskCounts.failed}
        </h2>
        <h3 className="text-xl font-medium text-gray-800">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskStatus;
