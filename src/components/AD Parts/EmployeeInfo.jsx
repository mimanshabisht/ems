import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import TaskCard from "../ED Parts/TaskCard";

const EmployeeInfo = () => {
  const { userData } = useContext(AuthContext);
  const { employeeName } = useParams();
  const employee = userData.employees.find((emp) => {
    return emp.firstName == employeeName;
  });
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">{employee.firstName} </h2>
        <Link
          to="/ems"
          className=" bg-red-500 rounded px-2 py-1 text-md font-medium"
        >
          Back
        </Link>
      </div>
      <TaskCard data={employee} />
      {/* <h2 className="text-xl font-semibold">Monthly record</h2>
      <p>Completed Tasks: </p>
      <p>Failed Tasks: </p> */}
    </div>
  );
};

export default EmployeeInfo;
