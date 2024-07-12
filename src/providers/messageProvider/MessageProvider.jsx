import { createContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("First message");

  const updateMessage = (e, newMessage) => {
    e.preventDefault();
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, updateMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
