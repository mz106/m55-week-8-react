export const addAuthor = async (author) => {
  const res = await fetch("http://localhost:5001/authors/addAuthor", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authorName: author,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
