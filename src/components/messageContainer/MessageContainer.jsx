import { useContext, useState } from "react";

import { MessageContext } from "../../providers/messageProvider/MessageProvider";

import "./MessageContainer.css";

const MessageContainer = () => {
  const [newMessage, setNewMessage] = useState("");

  const { message, updateMessage } = useContext(MessageContext);

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="wrapper">
      <h3>Change the Message</h3>
      <form onSubmit={(e) => updateMessage(e, newMessage)}>
        <input
          onChange={(e) => changeHandler(e, setNewMessage)}
          placeholder="New message..."
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default MessageContainer;
