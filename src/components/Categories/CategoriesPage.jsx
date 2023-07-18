import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);

  return <h1>{categories[0]}</h1>;
};

export default CategoriesPage;
