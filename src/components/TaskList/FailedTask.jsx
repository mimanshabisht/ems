import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] p-5 bg-red-400 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <p className=" bg-yellow-600 rounded px-2 py-1 text-sm font-medium">
          {data.category}
        </p>
        <p className="text-sm font-medium text-gray-900">{data.taskDate}</p>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-gray-900">
        {data.taskTitle}
      </h2>
      <p className="text-md mt-2 font-medium text-gray-900">
        {data.taskDescription}
      </p>
    </div>
  );
};

export default FailedTask;
