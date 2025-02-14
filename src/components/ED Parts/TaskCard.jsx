import React from "react";
import AcceptedTask from "../TaskList/AcceptedTask";
import CompletedTask from "../TaskList/CompletedTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";

const TaskCard = ({ data }) => {
  return (
    <div
      id="taskCard"
      className={`flex h-[50%] w-full py-4 mt-2 flex-nowrap gap-5 overflow-x-auto`}
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptedTask key={index} data={elem} />;
        }
        if (elem.completed) {
          return <CompletedTask key={index} data={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={index} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskCard;
