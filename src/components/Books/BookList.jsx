import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchMyBooks } from '../../redux/books/BookSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchMyBooks());
  }, [dispatch]);
  return (
    <div className="flex items-center justify-center scroll-smooth hover:scroll-auto">
      <ul className="mt-24 grid h-[70vh] w-[90%] gap-5 overflow-y-auto p-5 sm:w-[70%] md:mt-28 md:w-[80%]">
        {books
          && books.map((book) => (
            <li
              key={book.id}
              className="flex flex-col items-center justify-center bg-white py-5 shadow shadow-slate-400 hover:translate-y-2 hover:shadow-lg dark:bg-slate-600 md:flex-row md:justify-around"
            >
              <Book items={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;
