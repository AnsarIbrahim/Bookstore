import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/BookSlice';

const Book = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    const bookId = e.target.dataset.id;
    dispatch(removeBook(bookId));
  };

  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <button type="button" onClick={handleRemoveBook} data-id={id}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
