import { useContext, useState } from "react";

import { changeHandler } from "../../utils/helpers";
import { addAuthor } from "../../utils/authorFetch";

import { MessageContext } from "../../providers/messageProvider/MessageProvider";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  const { updateMessage } = useContext(MessageContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit handler AddAuthor");

    const data = await addAuthor(author);
    console.log("data in addAuthor: ", data);

    // data.author.authorName

    const newMessage = `You have added the author ${data.author.authorName}`;

    updateMessage(e, newMessage);
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Author name..."
          onChange={(e) => changeHandler(e, setAuthor)}
        />
        <button type="submit">Add author</button>
      </form>
    </div>
  );
};

export default AddAuthor;
