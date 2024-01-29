import { Anchor } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
const Header = () => {
  const items = [
    {
      key: "1",
      label: (
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "2",
      label: (
        <NavLink to="/tasks" className="nav-link">
          List Task
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink to="/users" className="nav-link">
          List Users
        </NavLink>
      ),
    },
  ];
  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
  // const nav = [
  //   {
  //     key: "1",
  //     href: "/",
  //     title: "Home",
  //   },
  //   {
  //     key: "2",
  //     href: "/task",
  //     title: "ListTask",
  //   },
  //   {
  //     key: "3",
  //     href: "/users",
  //     title: "ListUsers",
  //   },
  // ];
  // return (
  //   <>
  //     <Anchor
  //       direction="horizontal"
  //       style={{ display: "flex", alignItems: "center" }}
  //       items={nav}
  //     />
  //   </>
  // );
};

export default Header;
