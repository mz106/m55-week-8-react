import { useContext } from "react";

import { MessageContext } from "../../providers/messageProvider/MessageProvider";
import { AdminContext } from "../../providers/adminProvider/AdminProvider";

import "./Header.css";

const Header = () => {
  const { message } = useContext(MessageContext);
  const { toggleIsAdmin } = useContext(AdminContext);

  return (
    <header>
      <h2>Cool Books</h2>
      <p>{message}</p>
      <button onClick={(e) => toggleIsAdmin(e)}>Change Admin</button>
    </header>
  );
};

export default Header;
