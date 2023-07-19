import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/BookSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const payload = {
        id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(payload));
      setTitle('');
      setAuthor('');
      setCategory('');
    } else {
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <>
      <span className="border-t-2 flex items-center justify-center w-[77vw] m-auto border-slate-300 mt-10" />
      <div className="flex items-center mb-3 sm:items-start mt-5 justify-start flex-col w-[77vw] m-auto">
        <h2 className=" font-semibold text-2xl text-black">ADD NEW BOOK</h2>
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:w-[70vw] sm:m-auto">
        <form onSubmit={handleForm} className="flex sm:flex-row sm:items-start sm:justify-start items-center justify-center flex-col sm:mb-10 gap-5 sm:gap-14 ">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            required
            className="w-[50vw] sm:w-[30vw] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
            className="w-[50vw] sm:w-[10vw] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            required
            className="w-[50vw] sm:w-[10vw] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          />
          <button className="sm:mt-0 sm:ml-2 px-10 rounded-[5px] bg-[#0290ff] hover:text-white hover:bg-blue-700  text-white sm:px-16 py-1 sm:py-2 mt-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none mb-2" type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default BookForm;
