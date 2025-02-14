import React from "react";

const CompletedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] p-5 bg-green-400 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <p className=" bg-yellow-600 rounded px-2 py-1 text-sm font-medium">
          {data.category}
        </p>
        <p className="text-sm font-medium">{data.taskDate}</p>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
    </div>
  );
};

export default CompletedTask;
