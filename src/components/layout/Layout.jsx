import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import { MessageProvider } from "../../providers/messageProvider/MessageProvider";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <MessageProvider>
          <Header />
          {children}
          <Footer />
        </MessageProvider>
      </div>
    </>
  );
};

export default Layout;
