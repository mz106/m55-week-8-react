import { useState } from "react";

import { changeHandler } from "../../utils/helpers";
import { addAuthor } from "../../utils/authorFetch";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit handler AddAuthor");

    const data = await addAuthor(author);
    console.log("data in addAuthor: ", data);
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
