import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Header = ({ data, setUser }) => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    setUser("");
  };
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {data ? data.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-large font-medium h-10 px-4 py-2 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
