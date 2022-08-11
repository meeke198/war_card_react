
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Cards from "./Cards/Cards"
function Homepage(props) {
  // console.log("sharedlayout props", props);
  return (
    <>
      <div className="logo">
       Card War
       <Cards/>
      </div>
    </>
  );
}

export default Homepage;
