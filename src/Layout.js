import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./homePage/HomePage";
import ListTask from "./content/ListTask";
import Login from "./authen/Login";
import Register from "./authen/Register";
import ListUsers from "./user/ListUsers";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/tasks" element={<ListTask />} />
          <Route path="/users" element={<ListUsers />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default Layout;
