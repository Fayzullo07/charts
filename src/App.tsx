import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Employees from "./pages/Employees";
import EmployeesFilter from "./pages/EmployeesFilter";
import Tasks from "./pages/Tasks";
import TasksInfo from "./pages/TasksInfo";
import UserInfo from "./pages/UserInfo";
import UserKpi from "./pages/UserKpi";
import Missing from "./pages/Missing";

// Global css
import "./App.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employees-filter" element={<EmployeesFilter />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks-info" element={<TasksInfo />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/user-kpi" element={<UserKpi />} />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
