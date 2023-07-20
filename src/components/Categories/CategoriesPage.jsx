import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <h1 className="absolute flex h-full w-full  items-center justify-center text-2xl font-bold text-sky-500 hover:uppercase hover:text-red-600">
      {categories[0]}
    </h1>
  );
};

export default CategoriesPage;
