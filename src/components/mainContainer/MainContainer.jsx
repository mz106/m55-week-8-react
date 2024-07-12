import MessageContainer from "../messageContainer/MessageContainer";

import "./MainContainer.css";
import AddAuthor from "../addAuthor/AddAuthor";
import AdminContainer from "../adminContainer/AdminContainer";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuthor />

      <AdminContainer />
    </div>
  );
};

export default MainContainer;
