
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import JoinRoomContainer from "./pages/JoinRoom/JoinRoom";
import Homepage from "./components/Home/Homepage.jsx";





ReactDOM.render(
  <BrowserRouter>
    <div className="w-screen h-screen">
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </React.StrictMode>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
