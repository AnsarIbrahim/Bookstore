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
      <div className="pb-16 sm:pb-16 md:pb-16">
        <span className="m-auto mt-10 flex w-[77vw] items-center justify-center border-t-2 border-slate-300" />
        <div className="m-auto mb-3 mt-5 flex w-[77vw] flex-col items-center justify-start lg:items-start">
          <h2 className=" text-2xl font-semibold text-black">ADD NEW BOOK</h2>
        </div>
        <div className="flex flex-col items-center justify-center lg:m-auto lg:w-[70vw] lg:items-start lg:justify-start">
          <form
            onSubmit={handleForm}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row lg:mb-10 lg:items-start lg:justify-start lg:gap-14 "
          >
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Book Title"
              required
              className="w-[50vw] rounded-md border border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-slate-600 sm:w-[30vw] lg:w-[25vw]"
            />
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              required
              className="w-[50vw] rounded-md border border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-slate-600 sm:w-[10vw]"
            />
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              required
              className="w-[50vw] rounded-md border border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-slate-600 sm:w-[10vw]"
            />
            <button
              className="mb-2 mt-2 w-[30vw] rounded-[5px] bg-[#0290ff] py-1 text-white transition delay-150  duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:text-white motion-reduce:transition-none motion-reduce:hover:transform-none sm:ml-2 sm:mt-0 sm:w-24 md:mb-0 lg:mt-1 lg:w-[10vw]"
              type="submit"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookForm;
