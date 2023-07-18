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
    <div>
      <ul>
        {
        books && books.map((book) => (
          <li key={book.id}>
            <Book items={book} />
          </li>
        ))
        }

      </ul>
    </div>
  );
};

export default BookList;
