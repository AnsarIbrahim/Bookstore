import React, { useState } from 'react';
import BookList from '../Books/BookList';
import BookForm from '../Books/BookForm';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((res) => !res);
  };
  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <div className="overscroll-y-auto h-[130vh] sm:h-[110vh] lg:h-[110vh] scroll-smooth">
          <Navigation handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
          <BookList />
          <BookForm />
          <Footer handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
