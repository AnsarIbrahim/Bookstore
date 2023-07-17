import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/BookSlice';
import categoryReducer from './categories/CategorySlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
