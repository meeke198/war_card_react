// import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";

// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   HomeOutlined,
//   WechatOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import React, { useState } from "react";
// import "./sharedlayout.css";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/nav_bar/Nav_bar";
// import SearchBar from "../components/nav_bar/Search_bar";
// const { Header, Sider, Content } = Layout;

function Homepage(props) {
  console.log("sharedlayout props", props);
  return (
    <>
      <div className="h-screen"> 
      <div className="header" style={{ height: "500", width: "500"}}>
          <div className="logo">
            <img
              className="logo-img w-500 h-500"
              src="frontend/public/images/card_war.png"
              alt=""
            />
            </div>
          </div>
        </div>
    </>
  );
}

export default Homepage;
