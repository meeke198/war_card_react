
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Cards from "../Cards/Cards";
// import Modal from "../Modal/Modal";
// import Direction from "../Modal/Direction";
function Homepage(props) {
  // console.log("sharedlayout props", props);
  return (
    <>
      <div className="logo">
       Card War
       <Cards/>
      {/* <Modal/> */}
      </div>
    </>
  );
}

export default Homepage;
