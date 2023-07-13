import React from "react";

const Book = ({ title, author, onDelete }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Book;
