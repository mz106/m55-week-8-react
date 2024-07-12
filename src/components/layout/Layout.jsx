import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import { MessageProvider } from "../../providers/messageProvider/MessageProvider";
import { AdminProvider } from "../../providers/adminProvider/AdminProvider";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <MessageProvider>
          <AdminProvider>
            <Header />
            {children}
            <Footer />
          </AdminProvider>
        </MessageProvider>
      </div>
    </>
  );
};

export default Layout;
