import { useContext } from "react";

import { MessageContext } from "../../providers/messageProvider/MessageProvider";

import "./Header.css";

const Header = () => {
  const { message } = useContext(MessageContext);

  return (
    <header>
      <h2>Cool Books</h2>
      <p>{message}</p>
    </header>
  );
};

export default Header;
