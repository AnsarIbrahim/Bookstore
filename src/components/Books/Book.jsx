import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeMyBook } from '../../redux/books/BookSlice';

const Book = ({ items }) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = items;
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-base font-bold text-stone-400">{category}</p>
          <h1 className=" text-black text-3xl font-bold mt-2">{title}</h1>
          <p className="text-[#4386bf]">{author}</p>
        </div>
        <ul className="flex gap-4 mt-2 text-[#4386bf]">
          <li>
            <button className="hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none" type="submit">Comments</button>
          </li>
          <li className="border-r-2" />
          <li>
            <button
              className="hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeMyBook(id));
              }}
            >
              Remove
            </button>
          </li>
          <li className="border-r-2" />
          <li>
            <button className="hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none" type="submit">Edit</button>
          </li>
        </ul>
      </div>
      <div className="sm:flex gap-5 p-5  sm:ml-80">
        <CircularProgressbar
          className=" w-[4.25rem] hover:animate-spin"
          value={progress}
          styles={{
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            path: {
              stroke: '#0290ff',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
          }}
        />
        <div>
          <h2 className=" text-slate-400">
            {progress}
            {' '}
            %
          </h2>
          <span className=" font-semibold">Completed</span>

        </div>
      </div>
      <div className="flex"><span className="border-t-2 w-20 mb-3 sm:border-l-2 sm:h-16 sm:w-0" /></div>
      <div>
        <div className="flex flex-col sm:mr-20 items-center sm:items-start">
          <span className=" text-slate-400 font-normal font-mono">CURRENT CHAPTER</span>
          <p className=" font-serif font-medium">
            Chapter
            {' '}
            {chapter}
          </p>
          <button className="rounded-[5px] bg-[#0290ff] hover:text-white hover:bg-blue-700  text-slate-600 px-8 py-1 mt-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none" type="submit">Update progress</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
