import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);

  return <h1 className="flex font-bold text-2xl text-sky-500  items-center justify-center h-full w-full absolute hover:uppercase hover:text-red-600">{categories[0]}</h1>;
};

export default CategoriesPage;
