import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const [newTasks, setNewTasks] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTasks({
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    });
  };

  useEffect(() => {
    console.log(newTasks);
    const employees = JSON.parse(localStorage.getItem("employees"));
    employees.forEach((elem) => {
      if (assignTo == elem.firstName) {
        console.log(newTasks);
        if (newTasks) {
          elem.tasks.push(newTasks);
          elem.taskCounts.newTask += 1;
        }

        console.log(elem.tasks);
      }
    });
    if (newTasks) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
    setUserData({ employees });
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  }, [newTasks]);
  return (
    <div className="bg-[#1c1c1c] h-[70%] w-full p-5 mt-5 rounded-md">
      <h2 className="text-2xl font-semibold">Create Task</h2>
      <form onSubmit={submitHandler}>
        <div className="mt-3 flex justify-between gap-[250px]">
          <div className="w-full flex flex-col gap-[15px]">
            <div>
              <h3 className="text-sm">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full mt-1 px-2 py-1 text-sm bg-transparent rounded-lg border-2 border-white-400 "
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full mt-1 px-2 py-1 text-sm bg-transparent rounded-lg border-2 border-white-400 "
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="w-full mt-1 px-2 py-1 text-sm bg-transparent rounded-lg border-2 border-white-400 "
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-sm">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 px-2 py-1 text-sm bg-transparent rounded-lg border-2 border-white-400 "
                type="text"
                placeholder="Design, dev, etc"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-sm">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 resize-none mt-1 px-2 py-1 text-sm bg-transparent rounded-lg border-2 border-white-400 "
            />
            <button className="bg-emerald-600 px-5 py-3 mt-4 w-full text-lg rounded-lg font-semibold">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
