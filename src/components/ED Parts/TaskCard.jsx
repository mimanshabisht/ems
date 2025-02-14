import React from "react";
import AcceptedTask from "../TaskList/AcceptedTask";
import CompletedTask from "../TaskList/CompletedTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";

const TaskCard = ({ data }) => {
  return (
    <div
      id="taskCard"
      className="flex h-[50%] w-full py-5 mt-10 flex-nowrap gap-5 overflow-x-auto"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptedTask key={elem.taskTitle} data={elem} />;
        }
        if (elem.completed) {
          return <CompletedTask key={elem.taskTitle} data={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={elem.taskTitle} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={elem.taskTitle} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskCard;
