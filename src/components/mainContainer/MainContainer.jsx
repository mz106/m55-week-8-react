import React from "react";

import MessageContainer from "../messageContainer/MessageContainer";

import "./MainContainer.css";
import AddAuthor from "../addAuthor/AddAuthor";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuthor />
    </div>
  );
};

export default MainContainer;
