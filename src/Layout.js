import React from "react";
import Routes from "./Routes";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ChatBox from "./components/ChatBox/ChatBox";

function Layout(props) {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div>
          <Routes />
          <ChatBox/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
