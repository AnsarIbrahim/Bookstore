import React from "react";
import Book from "./Book";

const BookList = () => {
  const books = [
    {
      id: 1,
      title: "First Book",
      author: "Ansar",
    },
    {
      id: 2,
      title: "Second Book",
      author: "Ansar",
    },
    {
      id: 3,
      title: "Third Book",
      author: "Ansar",
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookList;
