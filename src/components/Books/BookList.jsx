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
      <ul className="w-[90%] sm:w-[70%] md:w-[80%] p-5 h-[70vh] grid gap-5 overflow-y-auto mt-24 md:mt-28">
        {books
          && books.map((book) => (
            <li key={book.id} className="flex justify-center items-center md:justify-around py-5 flex-col md:flex-row shadow shadow-slate-400 bg-white hover:shadow-lg hover:translate-y-2 dark:bg-slate-600">
              <Book items={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookList;
