import { useState } from "react";

import { changeHandler } from "../../utils/helpers";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  return (
    <div>
      <form>
        <input
          placeholder="Author name..."
          onChange={(e) => changeHandler(e, setAuthor)}
        />
        <button>Add author</button>
      </form>
    </div>
  );
};

export default AddAuthor;
