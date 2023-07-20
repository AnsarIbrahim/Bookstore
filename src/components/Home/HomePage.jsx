import React from 'react';
import BookList from '../Books/BookList';
import BookForm from '../Books/BookForm';

const HomePage = () => (
  <>
    <div className="overscroll-y-auto h-[130vh] sm:h-[110vh] lg:h-[110vh] scroll-smooth">
      <BookList />
      <BookForm />
    </div>
  </>
);

export default HomePage;
