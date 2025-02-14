import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeInfo from "./components/AD Parts/EmployeeInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/ems",
    element: <App />,
    children: [
      { path: "employee-info/:employeeName", element: <EmployeeInfo /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
